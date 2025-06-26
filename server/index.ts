import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
});
const openAi = new OpenAIApi(configuration);

app.post('/api/insight', async (req, res) => {
    const { text } = req.body;
    try {
        const response = await openAi.createChatCompletion({
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

        const aiInsight = response.data.choices[0].message?.content;
        res.json({ aiInsight });
    } catch (error) {
        console.error('OpenAI error:',  error);
        res.status(500).json({ error: 'Failed to generate insight.' });
    }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));