import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import { Request, Response } from 'express';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const openAi = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY!,
});

app.post('/api/insight', async (req: Request, res: Response) => {
    const { text } = req.body;
    try {
        const response = await openAi.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'You are a compassionate mental health coach that gives thoughtful insights on journal entries.',
                },
                {
                    role: 'user',
                    content: `Here's a journal entry: "${text}". What insight or reflection can you offer?`,
                },
            ],
        });

        const aiInsight = response.choices[0].message.content;
        res.json({ aiInsight });
    } catch (error) {
        console.error('OpenAI error:',  error);
        res.status(500).json({ error: 'Failed to generate insight.' });
    }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));