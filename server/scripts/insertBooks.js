const { MongoClient } = require("mongodb");
let documentsToInsert = require("./recommendedBooks.json");

// Connection URI
const uri = "mongodb+srv://username:27bKylHTcLzRZqhf@brocoders.kmwx8fe.mongodb.net/";

// Database Name
const dbName = "sih";

// Create a new MongoClient
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Function to insert multiple documents
async function insertDocuments(documents) {
    try {
        // Connect to the MongoDB server
        await client.connect();

        // Select the database
        const db = client.db(dbName);

        // Select the collection
        const collection = db.collection("recommendedbooks");

        // Insert multiple documents
        const result = await collection.insertMany(documents);
        console.log(`${result.insertedCount} documents inserted.`);
    } finally {
        // Close the connection
        await client.close();
    }
}

documentsToInsert = documentsToInsert.map((item) => {
    item["date"] = new Date();
    return item;
});

insertDocuments(documentsToInsert);
