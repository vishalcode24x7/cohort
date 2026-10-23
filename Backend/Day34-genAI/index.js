import "dotenv/config"
import readline from "readline/promises";
import { ChatGoogle } from "@langchain/google/node";
import {HumanMessage, tool, createAgent} from "langchain";
import { sendEmail } from "./mail.service.js";
import * as z from 'zod';

const emailTool = tool(
  sendEmail,
  {
    name: "emailTool",
    description: "use this took to send an email",
    schema: z.object({
      to: z.string().describe("The recipient's email address"),
      html: z.string().describe("The Html content of the email"),
      subject: z.string().describe("The subject of the email")
    })
  }
)

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

const agent = createAgent({
  model,
  tools: [emailTool]
})

const messages = [];

while (true) {
  const userInput = await rl.question(`${colors.cyan}You: ${colors.reset}`);

  messages.push(new HumanMessage(userInput))

  const response = await agent.invoke({messages});

  messages.push(response.messages[ response.messages.length - 1])

  // console.log(response)
  
  // console.log(`\n${colors.green}AI:\n${response.text}${colors.reset}\n`);
}

rl.close()
