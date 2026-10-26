import { ChatGoogle } from "@langchain/google/node";
import { HumanMessage, SystemMessage, AIMessage } from 'langchain'

const geminiModel1 = new ChatGoogle({
    model: "gemini-3.5-flash-lite",
    apiKey: process.env.GEMINI_API_KEY1,
});

const geminiModel2 = new ChatGoogle({
    model: "gemini-3.5-flash-lite",
    apiKey: process.env.GEMINI_API_KEY2,
})

export async function generateResponse(messages) {
    const response = await geminiModel1.invoke(messages.map(msg => {
        if (msg.role == 'user') {
            return new HumanMessage(msg.content)
        } else {
            return new AIMessage(msg.content)
        }
    }));

    return response.text;
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