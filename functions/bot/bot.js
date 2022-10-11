const {Telegraf} = require('telegraf')

const bot = new Telegraf('5544511977:AAG3jPCW9JcdHo1r2YguoYUXgmTKAvwJaSM')


bot.start(ctx=>{
    ctx.reply('Hello i am listening')
})

bot.command('test',ctx=>{
    ctx.reply('This is test command')
})

exports.handler = async event => {
    try {
      await bot.handleUpdate(JSON.parse(event.body))
      return { statusCode: 200, body: "" }
    } catch (e) {
      console.error("error in handler:", e)
      return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
    }
  }