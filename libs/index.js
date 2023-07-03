import { MongoClient, ObjectId } from "mongodb";

export async function connectToDb() {
  const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.rkgowgy.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  return client;
}

export async function getAllMeetups(client, dbName, collName) {
  const db = await client.db(dbName);
  const collection = await db.collection(collName);

  const meetups = await collection.find().toArray();

  return meetups;
}

export async function getMeetupsById(client, dbName, collName, meetupId) {
  const db = await client.db(dbName);
  const collection = await db.collection(collName);
  const formattedMeetupId = new ObjectId(meetupId);

  const selectedMeetup = await collection.findOne({ _id: formattedMeetupId });

  return selectedMeetup;
}

export async function insertDocument(client, dbName, collName, document) {
  const db = await client.db(dbName);
  const collection = await db.collection(collName);

  const result = await collection.insertOne(document);

  return result;
}
