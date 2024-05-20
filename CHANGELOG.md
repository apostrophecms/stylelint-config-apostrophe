# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## UNRELEASED

### Changed

- Allows `%` unit for `border-radius`.
- Allows imports before `$` variables in blocks.

## 4.0.0 (2024-05-15)

### Fixed

- Add support for vue files by using `stylelint-config-html/vue`.

## 3.0.2 (2024-03-08)

### Changed

- Add flexibility for `@extend` and `@include` and force `@media` last.

## 3.0.1 (2024-01-10)

### Changed

- Removed logic to automatically detect out of date stylelint plugins. Unfortunately, this [fails in an
unrecoverable way with the latest versions of some stylelint plugins](https://github.com/nodejs/node/issues/33460), breaking `npm install`.

## [3.0.0] - 2023-06-21

### Changed

- Upgraded dependencies

### Removed

- After upgrading to Stylelint 15, 76 rules that enforce stylistic conventions had been deprecated. They have been removed from the config.

## [2.0.0] - 2022-10-03

### Added

- Update dependencies and rules for stylelint v14+, remove `peerDependencies` package property.

## [1.1.0] - 2021-10-28

### Added

- Ignores inside CSS and preprocessor functions for the `declaration-property-unit-allowed-list` rule. Those functions do not represent the ultimate property unit after compiling.
- Adds eslint to test script and uses Apostrophe eslint config package.

## [1.0.1] - 2021-03-24

### Fixed

- Update to prevent false positives when running `compare`

## [1.0.0] - 2021-01-27

### Added

- Initial release of an ApostropheCMS team stylelint configuration. This is based on `stylelint-config-punkave` rules, with additional scripts for keeping up to date with the standard stylelint config.

[1.0.1]: https://github.com/apostrophecms/stylelint-config-apostrophe/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/apostrophecms/stylelint-config-apostrophe/releases/tag/1.0.0
