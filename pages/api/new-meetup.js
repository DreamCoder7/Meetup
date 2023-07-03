import { connectToDb, insertDocument } from "../../libs/index";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await connectToDb();
    const result = await insertDocument(client, "meetup", "meetups", data);
    console.log(result);

    res.status(201).json({ message: "meetup inserted!" });
  }
}
