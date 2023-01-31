load("//bazel:rules/nestjs/defs.bzl", "nest_app")


NPM_DEPS = [
    "//:node_modules/@nestjs/common",
    "//:node_modules/@nestjs/core",
    "//:node_modules/@nestjs/cli",
    "//:node_modules/@types/node",
    "//:node_modules/tslib",
    "//:node_modules/source-map-support",
    "//:node_modules/ts-jest",
    "//:node_modules/@nestjs/testing",
    "//:node_modules/@types/jest",
]

nest_app(npm_deps = NPM_DEPS)
