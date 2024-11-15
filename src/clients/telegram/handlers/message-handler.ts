import { TWEET_TEMPLATE } from "@/ai/prompts/tweet";
import { PromptBuilder } from "@fatduckai/ai";
import { OpenAI } from "openai";
import { Context } from "telegraf";

export class MessageHandler {
  async handle(ctx: Context) {
    try {
      // Skip handling if it's not a text message
      if (!ctx.message || !("text" in ctx.message)) {
        return;
      }

      const message = ctx.message.text;

      // use promptbuilder to build a prompt
      const prompt = new PromptBuilder(TWEET_TEMPLATE, {
        allowEmptyContent: true,
      }).withContext({
        username: ctx.from?.username,
        tone: "casual",
        tweet: message,
        recentPosts: "",
        examples: "",
        personality: "",
      });

      const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: prompt.build(),
      });

      const tweet = response.choices[0].message.content;

      // Basic echo response for now
      if (tweet) {
        await ctx.reply(tweet);
      } else {
      }
    } catch (error) {
      console.error("Error handling message:", error);
      await ctx.reply("Sorry, there was an error processing your message.");
    }
  }
}
