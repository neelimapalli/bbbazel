load("@aspect_rules_js//js:defs.bzl", "js_run_devserver",)
load("@aspect_rules_ts//ts:defs.bzl", "ts_config")
load("@npm//:defs.bzl", "npm_link_all_packages")
load("@npm//:next/package_json.bzl", next_bin = "bin")

npm_link_all_packages(name = "node_modules")

ASSET_PATTERNS = [
    "public/**/*",
]

SRC_PATTERNS = [
    "src/**/*",
]

TEST_PATTERNS = [
    "src/**/*.test.js*",
    "src/**/*.test.ts*",
    "src/**/*.spec.js*",
    "src/**/*.spec.ts*",
]

srcs = glob(
    include = SRC_PATTERNS + ASSET_PATTERNS,
    exclude = TEST_PATTERNS,
) + glob([".env*"])

next_bin.next_binary(
    name = "next_js_binary",
    visibility = ["//visibility:public"],
)

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
    visibility = ["//visibility:public"],
)

js_run_devserver(
    name = "dev",
    args = ["start"],
    chdir = package_name(),
    command = "/".join([".."] * len(package_name().split("/"))) + "/node_modules/.bin/next",
    data = [
        "next.config.js",
        "package.json",
        "//:node_modules/next",
        "//:node_modules/react",
        "//:node_modules/react-dom",
        "//:node_modules/typescript",
        # "//public",
    ] + srcs
)
