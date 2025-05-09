import { openai } from './ai';

export const runLLM = async ({ userMessage }: { userMessage: string }) => {
  const response = await openai.chat.completions.create({
    model: 'deepseek-chat',
    temperature: 0.1,
    messages: [{ role: 'user', content: userMessage }],
  });

  return response.choices[0].message.content;
};
