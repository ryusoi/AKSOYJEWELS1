import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI Client lazily/safely
  let aiClient: GoogleGenAI | null = null;
  function getAI() {
    if (!aiClient && process.env.GEMINI_API_KEY) {
      aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    }
    return aiClient;
  }

  // Health API
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      brand: 'Aksoy Jewel',
      location: 'Lotus Beach Hotel, Marmaris, Turkey',
      timestamp: new Date().toISOString()
    });
  });

  // AI Jewelry Concierge Endpoint
  app.post('/api/concierge', async (req, res) => {
    try {
      const { message, language = 'en', currency = 'USD' } = req.body;

      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      const client = getAI();
      if (!client) {
        // Safe graceful response when key is not yet configured
        return res.json({
          reply: `Welcome to Aksoy Jewel. I am your concierge for our Lotus Beach Hotel boutique in Marmaris. You can reach Mr. Parvin directly at +90 535 279 51 76 or on WhatsApp. Verified codes include MARMARIS2026 (20% off) and LOTUS15 (15% off).`
        });
      }

      const systemInstruction = `
You are the Senior Jewelry Concierge & Gemologist for "Aksoy Jewel", a premier ultra-luxury fine jewelry brand established in 1990 in Marmaris, Muğla, Türkiye, with its flagship boutique inside the Lotus Beach Hotel.
The founding partners are Mr. Rashid Aksoy and Mr. Fatih.
The boutique manager and senior sales consultant is Mr. Parvin (Phone & WhatsApp: +90 535 279 51 76).

Key facts & rules:
- Materials: Exclusively 18k and 14k Solid Gold (Yellow, White, Rose), Platinum 950, Natural VVS/VS Diamonds, Certified Ceylon Sapphires, Colombian Emeralds, South Sea Pearls. No gold plating.
- Active verified discount codes to mention when asked: MARMARIS2026 (20% off, min $1,000), LOTUS15 (15% off, min $500), AKSOYGOLD (10% off). NEVER invent fake discount codes.
- Services: Private showroom viewing at Lotus Beach Hotel, yacht/in-suite concierge visits, solid gold piercing studio, Get Zapped permanent welded jewelry, bespoke custom diamond bridal parures.
- Tone: Extremely polite, refined, warm Mediterranean hospitality, knowledgeable, concise (2-4 sentences max per reply), poetic yet authoritative on gold and gemstones.
- Respond in the user's selected language: ${language}.
`;

      const response = await client.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: `${systemInstruction}\n\nUser Question: ${message}` }] }
        ]
      });

      const replyText = response.text || 'How may I assist your fine jewelry discovery at Aksoy Jewel today?';
      res.json({ reply: replyText });
    } catch (error) {
      console.error('Concierge API error:', error);
      res.json({
        reply: 'Welcome to Aksoy Jewel. Our Marmaris concierge is ready to assist you. You may also contact Mr. Parvin directly at +90 535 279 51 76 on WhatsApp.'
      });
    }
  });

  // Vite Middleware for dev or static dist for prod
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Aksoy Jewel Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
