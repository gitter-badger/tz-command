#! /usr/bin/env node

const command = require("./")
const pkg = require("./package")
const yargs = require("yargs")

const args = yargs
  .usage(pkg.description)
  .example("tz-command -n +56987456982 -c \"*000000,018,10,999#\" -s twilio_sid -t twilio_token -f twilio_number")
  .demand(["n", "c", "s", "t", "f"])
  .alias("n", "numbers").describe("n", "numbers separated by ','")
  .alias("c", "commands").describe("c", "commands separated by '|'")
  .alias("s", "sid").describe("s", "twilio account sid")
  .alias("t", "token").describe("t", "twilio auth token")
  .alias("f", "from").describe("f", "twilio from number")
  .version(pkg.version, "version").alias("version", "V")
  .help("help").alias("help", "h")

const options = {
  numbers: args.argv.n.toString().split(",").map(x => x.trim()),
  commands: args.argv.c.toString().split("|").map(x => x.trim()),
  sid: args.argv.s,
  token: args.argv.t,
  from: args.argv.f.toString()
}

command(options, (err, results) => {
  if (err) console.log(err)
  console.log(results)
})
