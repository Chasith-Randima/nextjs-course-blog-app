import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() == "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input.." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    let connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.3mhko.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
      // client = await MongoClient.connect(
      //   "mongodb+srv://randima:ZzVxMxYGi42pTpQE@cluster0.3mhko.mongodb.net/next-course-blog-app?retryWrites=true&w=majority"
      // );
    } catch (error) {
      res.status(500).json({ message: "could not connect to database" });
      console.log(error);
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message", message: newMessage });
  }
}

export default handler;
