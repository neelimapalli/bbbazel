load("@aspect_rules_js//js:defs.bzl", "js_library", "js_run_devserver", "js_test")
load("@aspect_rules_ts//ts:defs.bzl", "ts_config")
load("@npm//:react-scripts/package_json.bzl", cra_bin = "bin")
load("@npm//:defs.bzl", "npm_link_all_packages")
load("@aspect_bazel_lib//lib:copy_to_bin.bzl", "copy_to_bin")

npm_link_all_packages(name = "node_modules")

ts_config(
    name = "tsconfig.base",
    src = "tsconfig.base.json",
    visibility = [":__subpackages__"],
)

ts_config(
    name = "tsconfig.node",
    src = "tsconfig.node.json",
    deps = [":tsconfig.base"],
    visibility = [":__subpackages__"],
)

ts_config(
    name = "tsconfig.react",
    src = "tsconfig.react.json",
    deps = [":tsconfig.base"],
    visibility = [":__subpackages__"],
)

exports_files(["package.json"])

copy_to_bin(
    name = "package_json",
    srcs = ["package.json"],
    visibility = ["//visibility:public"],
)

# copy_to_bin(
#     name = "tsconfig.base",
#     srcs = ["tsconfig.base.json"],
#     visibility = ["//visibility:public"],
# )

# copy_to_bin(
#     name = "tsconfig.node",
#     srcs = ["tsconfig.node.json"],
#     visibility = ["//visibility:public"],
# )

# copy_to_bin(
#     name = "tsconfig.react",
#     srcs = ["tsconfig.react.json"],
#     visibility = ["//visibility:public"],
# )
