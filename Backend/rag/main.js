import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { Pinecone } from "@pinecone-database/pinecone";
import dotenv from "dotenv";

dotenv.config();

// 1. Initialize Pinecone
const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
});

const index = pc.index("cohort-gemini");

// 2. Load PDF
// const loader = new PDFLoader("./story.pdf");
// const docs = await loader.load();

// console.log(`Loaded ${docs.length} PDF pages`);

// 3. Initialize Gemini Embeddings
const embeddings = new GoogleGenerativeAIEmbeddings({
    model: "gemini-embedding-2",
    apiKey: process.env.GEMINI_API_KEY,
});

// 4. Split documents into chunks
// const splitter = new RecursiveCharacterTextSplitter({
//     chunkSize: 500,
//     chunkOverlap: 50,
// });

// const chunks = await splitter.splitDocuments(docs);

// console.log(`Generated ${chunks.length} chunks`);

// 5. Generate embeddings for every chunk
// const vectors = await embeddings.embedDocuments(
//     chunks.map((doc) => doc.pageContent)
// );

// 6. Prepare Pinecone records
// const records = chunks.map((doc, index) => ({
//     id: `chunk-${index + 1}`,
//     values: vectors[index],
//     metadata: {
//         text: doc.pageContent,
//         source: doc.metadata.source,
//         page: doc.metadata.loc?.pageNumber ?? null,
//     },
// }));

// 7. Upload records to Pinecone in batches
// const batchSize = 500;

// for (let i = 0; i < records.length; i += batchSize) {
//     const batch = records.slice(i, i + batchSize);

//     await index.upsert({
//         records: batch,
//     });
// }

// console.log("Successfully uploaded all chunks to Pinecone!");

const queryEmbedding = await embeddings.embedQuery(
    "first chapter of story"
);

console.log(queryEmbedding);

const results = await index.query({
    vector: queryEmbedding,
    topK: 5,
    includeMetadata: true,
});

console.log(results);