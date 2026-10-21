import { ChatGoogle } from "@langchain/google/node";

const model = new ChatGoogle({
    model: "gemini-3.7-flash",
    apiKey: process.env.GEMINIT_API_KEY,
});

export async function testAi(){
    model.invoke("what is your name").then((response) => {
        console.log(response.text);
    })
}