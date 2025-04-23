import OpenAI from 'openai';
// import { HttpsProxyAgent } from 'https-proxy-agent';

export const openai = new OpenAI({
  // httpAgent: new HttpsProxyAgent('http://127.0.0.1:7890'),
  baseURL: 'https://api.deepseek.com',
});
