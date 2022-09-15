import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
    const client = await clientPromise;
    const db = client.db("test");
    if (req.method == "GET") {
        const items = await db.collection("items").find().toArray();
        res.send(items);
    } else if (req.method == "POST") {
        await db.collection("items").insertOne({ name: "new Item", id: 0 });
        res.send("item added successfully");
    }
};

export default handler;
