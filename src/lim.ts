import type { AIMessage } from '../types';

export const runLLM = async ({
  model = 'gpt-4o-mini',
  messages,
  temperature = 0.1,
}: {
  model?: string;
  messages: AIMessage[];
  temperature?: number;
}) => {
  const response = await openai.chat.completions.create({
    model,
    messages,
    temperature,
  });
};
