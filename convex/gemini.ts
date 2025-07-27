import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import { v } from "convex/values";
import { api } from "./_generated/api";
import { action } from "./_generated/server";

// Initialize the Gemini API with your API key
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not defined in environment variables");
}
const genAI = new GoogleGenerativeAI(apiKey);

export const chat = action({
  args: {
    messageBody: v.string(),
    conversation: v.id("conversations"),
  },
  handler: async (ctx, args) => {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ],
      generationConfig: {
        maxOutputTokens: 100,
        temperature: 0.7,
      },
    });

    // Send the message with system prompt
    const prompt = [
      "You are a friendly bot in a group chat responding to questions like a friend explaining things",
      args.messageBody,
    ].join("\n");

    try {
      const result = await model.generateContent(prompt);
      const messageContent = result.response.text();

      await ctx.runMutation(api.messages.sendChatGPTMessage, {
        content:
          messageContent ?? "I'm sorry, I don't have a response for that",
        conversation: args.conversation,
        messageType: "text",
      });
    } catch (error) {
      console.error("Gemini API error:", error);
      await ctx.runMutation(api.messages.sendChatGPTMessage, {
        content: "I'm sorry, I encountered an error processing your request.",
        conversation: args.conversation,
        messageType: "text",
      });
    }
  },
});

export const dall_e = action({
  args: {
    conversation: v.id("conversations"),
    messageBody: v.string(),
  },
  handler: async (ctx, args) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
      const prompt = `Create a brief, vivid description of an image based on this request: "${args.messageBody}"`;
      const result = await model.generateContent(prompt);
      const imageDescription = result.response.text();

      await ctx.runMutation(api.messages.sendChatGPTMessage, {
        content: `I'd create an image of: ${imageDescription}\n\n(Note: Image generation is currently unavailable with Gemini. Consider integrating with Stability AI or another image generation service.)`,
        conversation: args.conversation,
        messageType: "text",
      });
    } catch (error) {
      console.error("Gemini API error:", error);
      await ctx.runMutation(api.messages.sendChatGPTMessage, {
        content:
          "I'm sorry, I encountered an error processing your image request.",
        conversation: args.conversation,
        messageType: "text",
      });
    }
  },
});
