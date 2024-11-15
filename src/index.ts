import { TelegramClient } from "./clients/telegram/telegram";

const telegram = new TelegramClient({
  token: process.env.TELEGRAM_BOT_TOKEN!,
});

telegram.start();
