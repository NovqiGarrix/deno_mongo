import { MongoClient, load as loadEnv } from './deps.ts';

const DENO_ENV = Deno.env.get("DENO_ENV") || "DEV";
if (DENO_ENV === "DEV") {
    await loadEnv();
}

const client = new MongoClient();

const MONGODB_HOST = Deno.env.get("MONGODB_HOST");
const MONGODB_PORT = Deno.env.get("MONGODB_PORT");

if (MONGODB_HOST && MONGODB_PORT) {
    await client.connect("");
    console.log(`DATABASE NAME: ${client.database().name.toUpperCase()}`);
    Deno.exit(0);
}

console.error(`DATABASE URL NOT FOUND!!!`);
Deno.exit(1);