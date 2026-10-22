import "dotenv/config"
import readline from "readline/promises";
import { ChatGoogle } from "@langchain/google/node";
import {HumanMessage} from "langchain";

const colors = {
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  reset: "\x1b[0m",
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatGoogle({
  model: "gemini-3.7-flash",
  apiKey: process.env.GEMINI_API_KEY,
});

const messages = [];

while (true) {
  const userInput = await rl.question(`${colors.cyan}You: ${colors.reset}`);

  messages.push(new HumanMessage(userInput))

  const response = await model.invoke(messages);

  messages.push(response)
  
  console.log(`\n${colors.green}AI:\n${response.text}${colors.reset}\n`);
}

rl.close()
