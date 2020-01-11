# @saitho/semantic-release-sharedconf-npm

[**semantic-release**](https://github.com/semantic-release/semantic-release) shareable config to publish npm packages.

[![Travis](https://img.shields.io/travis/saitho/semantic-release-sharedconf-npm.svg)](https://travis-ci.org/saitho/semantic-release-sharedconf-npm)

[![npm latest version](https://img.shields.io/npm/v/@saitho/semantic-release-sharedconf-npm/latest.svg)](https://www.npmjs.com/package/@saitho/semantic-release-sharedconf-npm)
[![npm next version](https://img.shields.io/npm/v/@saitho/semantic-release-sharedconf-npm/next.svg)](https://www.npmjs.com/package/@saitho/semantic-release-sharedconf-npm)

## Plugins

This shareable configuration use the following plugins:
- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@semantic-release/npm`](https://github.com/semantic-release/npm)
- [`@semantic-release/github`](https://github.com/semantic-release/github)
- [`@semantic-release/exec`](https://github.com/semantic-release/exec)
- [`@qiwi/semantic-release-gh-pages-plugin`](https://github.com/qiwi/semantic-release-gh-pages-plugin)

## Install

```bash
$ npm install --save-dev semantic-release @saitho/semantic-release-sharedconf-npm
```

## Usage

The shareable config can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "extends": "@saitho/semantic-release-sharedconf-npm"
}
```

## Configuration

See each [plugin](#plugins) documentation for required installation and configuration steps.
