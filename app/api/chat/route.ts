// BAN BREAKER/app/api/chat/route.ts

import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import Tesseract from 'tesseract.js';
import path from 'path';
import os from 'os';
import fs from 'fs/promises';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const jedenPersona = `You are JEDEN, an AI assistant by Heavstal Tech™. Your ONLY purpose is to help users with WhatsApp ban appeals.
- If the user asks for anything unrelated to WhatsApp bans (e.g., "who are you?", "tell me a joke", "what is the weather?"), you MUST politely refuse and strictly guide them back to the topic. Your response must be: "My purpose is to assist with WhatsApp ban appeals. How can I help you with your account issue today?"
- If you analyze an image and it is NOT a WhatsApp ban screenshot, you MUST reply with ONLY this message: "The image provided does not appear to be a WhatsApp ban screenshot. I can only assist with generating appeals based on ban notifications. Please provide a relevant image or describe your ban situation."
- When you are given text from a WhatsApp ban screenshot, you MUST generate three distinct appeal templates based on it. You must format them with Markdown headings like this: ### 1. Formal Appeal, ### 2. Informal Appeal, and ### 3. Casual Appeal. Each appeal must be well-written and and ready to be copied by the user.
- If a user just describes their situation in text, generate the three appeals based on their description.
- Do not add any conversational text before or after the three appeals. Just provide the appeals directly.`;

export async function POST(req: NextRequest) {
  console.log('API route hit. Processing request...');
  if (!process.env.GROQ_API_KEY) {
      console.error('FATAL: GROQ_API_KEY is not set in environment variables.');
      return NextResponse.json({ error: 'Server configuration error: Missing API Key.' }, { status: 500 });
  }
    
  try {
    const formData = await req.formData();
    const prompt = formData.get('prompt') as string;
    const imageFile = formData.get('image') as File | null;

    let userQuery = prompt;

    if (imageFile) {
      console.log('Image file detected. Processing with Tesseract.js...');
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const tempFilePath = path.join(os.tmpdir(), `${Date.now()}-${imageFile.name}`);
      await fs.writeFile(tempFilePath, buffer);
      
      const { data: { text } } = await Tesseract.recognize(tempFilePath, 'eng');
      await fs.unlink(tempFilePath); 
      console.log('Tesseract OCR Result:', text);

      const isBanScreenshot = text && text.toLowerCase().includes('your phone number') && text.toLowerCase().includes('is banned from using whatsapp');

      if (isBanScreenshot) {
         userQuery = `The user sent a screenshot of their ban. The text I extracted says: "${text}". Please generate the three distinct appeal templates (Formal, Informal, Casual) based on this information. The user's prompt was: "${prompt}"`;
      } else {
         userQuery = `I analyzed an image from the user but it does not seem to be a WhatsApp ban. The text I found was: "${text}". Please respond according to your strict persona for non-ban images.`;
      }
    }
    
    if (!userQuery && !imageFile) {
        console.log('No prompt or image provided.');
        return NextResponse.json({ reply: "Please provide a description or an image of your ban." });
    }

    console.log('Final query being sent to Groq:', userQuery);
    const chatCompletion = await groq.chat.completions.create({
        messages: [
            { role: "system", content: jedenPersona },
            { role: "user", content: userQuery }
        ],
        model: "llama-3.1-8b-instant",
    });

    const reply = chatCompletion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";
    console.log('Groq API reply successfully received.');
    return NextResponse.json({ reply });

  } catch (error) {
    console.error('API Chat Error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
  }
