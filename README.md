# tz-command

[![Join the chat at https://gitter.im/lgaticaq/tz-command](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/lgaticaq/tz-command?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![npm version](https://img.shields.io/npm/v/tz-command.svg?style=flat-square)](https://www.npmjs.com/package/tz-command)
[![npm downloads](https://img.shields.io/npm/dm/tz-command.svg?style=flat-square)](https://www.npmjs.com/package/tz-command)
[![Build Status](https://img.shields.io/travis/lgaticaq/tz-command.svg?style=flat-square)](https://travis-ci.org/lgaticaq/tz-command)
[![dependency Status](https://img.shields.io/david/lgaticaq/tz-command.svg?style=flat-square)](https://david-dm.org/lgaticaq/tz-command#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/lgaticaq/tz-command.svg?style=flat-square)](https://david-dm.org/lgaticaq/tz-command#info=devDependencies)
[![Join the chat at https://gitter.im/lgaticaq/tz-command](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg?style=flat-square)](https://gitter.im/lgaticaq/tz-command?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

CLI for send custom sms (twilio api) commands to avls

## Installation

```bash
$ npm i -g tz-command
```

## CLI

```bash
$ tz-command -h
CLI for send custom sms (twilio api) commands to avls

Options:
  -n, --numbers   numbers separated by ','  [required]
  -c, --commands  commands separated by '|' [required]
  -s, --sid       twilio account sid        [required]
  -t, --token     twilio auth token         [required]
  -f, --from      twilio from number        [required]
  --version, -V   Show version number       [boolean]
  --help, -h      Show help                 [boolean]

Examples:
  tz-command -n +56987654321 -c "*000000,018,10,999#" -s twilio_sid -t twilio_token -f twilio_number
```
