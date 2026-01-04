
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getMenuRecommendation = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are the House of Curry AI Concierge. Based on the user prompt: "${userPrompt}", recommend 2-3 dishes from our standard menu structure (Starters, Mains, Breads, Rice, Desserts). Use an official, professional, and welcoming tone. Focus on flavors and ingredients. Keep the response under 150 words.`,
      config: {
        temperature: 0.7,
        topP: 0.8,
        maxOutputTokens: 500,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently perfecting our recipes. Please browse our menu below or ask one of our staff members for a recommendation.";
  }
};
