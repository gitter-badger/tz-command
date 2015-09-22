"use strict"

const twilio = require("twilio")
const async = require("async")

module.exports = function(options, cb) {
  const accountSid = options.sid
  const authToken = options.token
  const client = twilio(accountSid, authToken)
  const from = options.from.startsWith("+") ? options.from : `+${options.from}`
  const rCommand = /^\*\d{6}\,\d{3}(\S*)?\#$/
  const rNumber = /^(\+)?\d{11}$/
  let messages = []
  for (let n of options.numbers) {
    for (let c of options.commands) {
      if (rCommand.test(c) && rNumber.test(n)) {
        messages.push({
          body: c,
          to: n.startsWith("+") ? n : `+${n}`,
          from: from
        })
      }
    }
  }
  async.map(messages, client.messages.create, (err, results) => {
    if (err) return cb(err)
    const result = results.map(x => {
      return `Command ${x.body} send successfully to ${x.to}`
    }).join("\n")
    cb(null, result)
  })
}
