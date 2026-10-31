import { ChatGoogle } from "@langchain/google/node";
import { HumanMessage, SystemMessage, AIMessage, tool, createAgent } from 'langchain'
import * as z from "zod"
import { searchInternet } from "./internet.service.js";


const geminiModel1 = new ChatGoogle({
    model: "gemini-3.5-flash-lite",
    apiKey: process.env.GEMINI_API_KEY1,
});

const geminiModel2 = new ChatGoogle({
    model: "gemini-3.5-flash-lite",
    apiKey: process.env.GEMINI_API_KEY2,
})

const searchInternetTool = tool(
    searchInternet,
    {
        name: "searchInternet",
        description: "use for access internet",
        schema: z.object({
            query: z.string().describe("The search query to look up on the internet.")
        })
    }
)

const agent = createAgent({
    model: geminiModel1,
    tools: [searchInternetTool]
})

export async function generateResponse(messages) {
    const response = await agent.invoke({
        messages: [
            new SystemMessage(`
                You are a helpful and precise assistance for answering questions.
                If you don't know the answer, say you don't know.
                If the question requires up to date infromation, use the "searchInternet" tool to get the latest
                information from the internet and then answer based on the search resulst
            `),
            ...(messages.map(msg => {
                if (msg.role == "user") {
                    return new HumanMessage(msg.content)
                } else if (msg.role == "ai") {
                    return new AIMessage(msg.content)
                }
            }))]
    });

    return response.messages[response.messages.length - 1].text;
}

export async function generateChatTitle(message) {

    const response = await geminiModel2.invoke([
        new SystemMessage(`You are a helpful assistant that generates a title for a chat based on the user's message. Please provide a concise and relevant title.
                        user will provide a message and you will generate a title for the chat based on that message in 2 to 5 words. Do not include any additional information or context in the title.
            `),
        new HumanMessage(`
            Generate a title for the following message: "${message}"
            `)
    ]);

    return response.text;
}