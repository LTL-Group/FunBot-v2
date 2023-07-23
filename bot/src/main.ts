import { Bot } from "grammy";
import 'dotenv/config'

const bot = new Bot(process.env.TELEGRAM_API_TOKEN);

bot.command("start", (ctx) => ctx.reply("GHEKJLASDKLJASDWelcome! Up and running."));
bot.on("message", (ctx) => ctx.reply("123Got another message!"))

bot.start()
