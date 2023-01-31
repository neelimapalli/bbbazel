load("@aspect_rules_swc//swc:defs.bzl", "swc")
load("@aspect_rules_ts//ts:defs.bzl", "ts_project", "ts_config")
load("@aspect_rules_js//js:defs.bzl", "js_binary", "js_library")
load("@bazel_skylib//lib:partial.bzl", "partial")
load("@jest//:defs.bzl", "jest_test")

SRC_PATTERNS = [
    "src/**/*.ts"
]

TEST_PATTERNS = [
    "src/**/*.test.ts",
    "src/**/*.spec.ts"
]

SRCS = glob(include = SRC_PATTERNS, exclude = TEST_PATTERNS) + glob([".env*"])

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
    deps = ["//:tsconfig.node"],
)


# For more information about using swc to transpile please see the ts_project_transpiler example
# https://github.com/aspect-build/bazel-examples/tree/main/ts_project_transpiler
ts_project(
    name = "build",
    srcs = SRCS,
    tsconfig = ":tsconfig",
    declaration = True,
    source_map = True,
    transpiler = partial.make(
        swc,
        swcrc = ".swcrc",
        out_dir = "dist"
    ),
    deps = [
        "//:node_modules/@nestjs/common",
        "//:node_modules/@nestjs/core",
        "//:node_modules/@types/node",
        "//:node_modules/tslib",
    ],
)

js_library(
    name = "jest_config",
    srcs = ["jest.config.js"],
    visibility = ["//visibility:public"],
)

js_binary(
    name = "dev",
    data = [
        ":build",

        # Added by swc during transpilation and used at runtime
        "//:node_modules/regenerator-runtime",
    ],
    entry_point = "dist/src/main.js",
)

jest_test(
    name = "test",
    config = ":jest_config",
    data = [
        ":swc",
        "//:node_modules/ts-jest",
        "//:node_modules/@nestjs/testing",
        "//:node_modules/@types/jest",
        "//:tsconfig.node"
    ] + glob(include = TEST_PATTERNS),
)