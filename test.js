"use strict"

const expect = require("chai").expect
const command = require("./")
const chance = require("chance")()

describe("Send a command", function() {
  it("send one command to one avl", function(done) {
    this.timeout(5000)
    const password = chance.string({pool: "0123456789", length: 6})
    const code = chance.string({pool: "0123456789", length: 3})
    const extra = chance.pick([
      `,${chance.string({pool: "0123456789", length: 2})}`,
      `,${chance.string({pool: "0123456789", length: 3})}`,
      ""
    ])
    const commands = [`*${password},${code}${extra}#`]
    const numbers = [`+5699${chance.string({pool: "0123456789", length: 7})}`]
    const options = {
      numbers: numbers,
      commands: commands,
      sid: process.env.TWILIO_ACCOUNT_SID,
      token: process.env.TWILIO_AUTH_TOKEN,
      from: process.env.TWILIO_NUMBER
    }
    const success = `Command ${commands} send successfully to ${numbers}`
    command(options, (err, results) => {
      if (err) throw err
      expect(results).to.be.a("string")
      expect(results).to.be.equal(success)
      done()
    })
  })

  it("send multiple commands to multiple avls", function(done) {
    this.timeout(5000)
    const password = chance.string({pool: "0123456789", length: 6})
    const commands = Array(3).fill(0).map(() => {
      let code = chance.string({pool: "0123456789", length: 3})
      let extra = chance.pick([
        `,${chance.string({pool: "0123456789", length: 2})}`,
        `,${chance.string({pool: "0123456789", length: 3})}`,
        ""
      ])
      return `*${password},${code}${extra}#`
    })
    const numbers = chance.n(chance.string, 3, {pool: "0123456789", length: 7}).map(x => {
      return `+5699${x}`
    })
    const options = {
      numbers: numbers,
      commands: commands,
      sid: process.env.TWILIO_ACCOUNT_SID,
      token: process.env.TWILIO_AUTH_TOKEN,
      from: process.env.TWILIO_NUMBER
    }
    command(options, (err, results) => {
      if (err) throw err
      expect(results).to.be.a("string")
      for (let n of numbers) {
        for (let c of commands) {
          expect(results).to.contain(`Command ${c} send successfully to ${n}`)
        }
      }
      done()
    })
  })
})
