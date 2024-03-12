import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function findPostsByUser(req, res) {
	try {
		//open a connection to mongoDB
		await client.connect();
		//define the database and collection to connect to
		const db = client.db("blog").collection("posts");
		// execute the query and convert the result to an array
		const posts = await db
			.find({
				createdBy: req.headers.userId,
			})
			.toArray();
		// close the connection to the database
		await client.close();
		// convert the the result to json and return it
		const jsonPosts = await posts.json();
		console.log(jsonPosts);
		res.status(200).json(jsonPosts);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Internal server error" });
	}
}

export async function createPost(req, res) {
	const data = req.body;
	try {
		await client.connect();
		const db = client.db("blog").collection("posts");
		const result = await db.insertOne(data);
		await client.close();
		res.status(201).json({ message: "Post created!" });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Internal server error" });
	}
}

export default async function handler(req, res) {
	switch (req.method) {
		case "GET":
			await findPosts(req, res);
			break;
		default:
			res.status(405).end(); //Method Not Allowed
			break;
	}
}
