import "dotenv/config"
import readline from "readline";
import { ChatMistralAI } from "@langchain/mistralai";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatMistralAI({
  model: "mistral-small-latest"
})

  const response = await model.invoke("capital of india ? = ");

  console.log(response.text);


