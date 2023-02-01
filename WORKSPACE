workspace(name = "bazel_onboarding")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "aspect_rules_js",
    sha256 = "66ecc9f56300dd63fb86f11cfa1e8affcaa42d5300e2746dba08541916e913fd",
    strip_prefix = "rules_js-1.13.0",
    url = "https://github.com/aspect-build/rules_js/archive/refs/tags/v1.13.0.tar.gz",
)

http_archive(
    name = "aspect_rules_ts",
    sha256 = "6406905c5f7c5ca6dedcca5dacbffbf32bb2a5deb77f50da73e7195b2b7e8cbc",
    strip_prefix = "rules_ts-1.0.5",
    url = "https://github.com/aspect-build/rules_ts/archive/refs/tags/v1.0.5.tar.gz",
)

http_archive(
    name = "aspect_rules_jest",
    sha256 = "b5bf5f740da458fc3199264be6ef7acb74ddbdc30b4a7f75503e5e164e6c1781",
    strip_prefix = "rules_jest-0.14.0",
    url = "https://github.com/aspect-build/rules_jest/archive/refs/tags/v0.14.0.tar.gz",
)

http_archive(
    name = "aspect_rules_swc",
    sha256 = "c35e633c2c90a4cd6796e66d66bcf37d31a81737afc76030201a9ef8599abc58",
    strip_prefix = "rules_swc-0.21.3",
    url = "https://github.com/aspect-build/rules_swc/archive/refs/tags/v0.21.3.tar.gz",
)

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

rules_js_dependencies()

load("@aspect_rules_ts//ts:repositories.bzl", "rules_ts_dependencies")

rules_ts_dependencies(ts_version_from = "//:package.json")

load("@aspect_rules_jest//jest:dependencies.bzl", "rules_jest_dependencies")

rules_jest_dependencies()

load("@aspect_rules_jest//jest:repositories.bzl", "jest_repositories")

jest_repositories(name = "jest")

load("@jest//:npm_repositories.bzl", jest_npm_repositories = "npm_repositories")

jest_npm_repositories()

load("@rules_nodejs//nodejs:repositories.bzl", "DEFAULT_NODE_VERSION", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "nodejs",
    node_version = DEFAULT_NODE_VERSION,
)

load("@aspect_rules_js//npm:npm_import.bzl", "npm_translate_lock")

npm_translate_lock(
    name = "npm",
    bins = {
        # derived from "bin" attribute in node_modules/react-scripts/package.json
        "react-scripts": {
            "react-scripts": "./bin/react-scripts.js",
        },
        "http-server": {
            "http-server": "./bin/http-server",
        },
        "@nestjs": {
            "@nestjs": "./cli/bin/nest.js",
        },
          "next": {
            "next": "./dist/bin/next",
        }
    },
    pnpm_lock = "//:pnpm-lock.yaml",
    npmrc = "//:.npmrc",
    public_hoist_packages = {
        "eslint-config-react-app": [""],
        "eslint": [""],
    },
    verify_node_modules_ignored = "//:.bazelignore",
)

load("@npm//:repositories.bzl", "npm_repositories")

npm_repositories()

load("@aspect_rules_swc//swc:dependencies.bzl", "rules_swc_dependencies")

rules_swc_dependencies()

load("@aspect_rules_swc//swc:repositories.bzl", "swc_register_toolchains", LATEST_SWC_VERSION = "LATEST_VERSION")

swc_register_toolchains(
    name = "swc",
    swc_version = LATEST_SWC_VERSION,
)