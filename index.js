import express from "express";
import TelegramBot from "node-telegram-bot-api";

const app = express();
const PORT = process.env.PORT || 3000;

// Your Telegram token goes here 👇
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text?.toLowerCase();

  if (text.includes("hi") || text.includes("hello")) {
    bot.sendMessage(chatId, "Hey there 😊 I’m Ava — how’s your day going?");
  } else {
    bot.sendMessage(chatId, "I’m listening 💬");
  }
});

app.get("/", (req, res) => {
  res.send("Ava bot is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
