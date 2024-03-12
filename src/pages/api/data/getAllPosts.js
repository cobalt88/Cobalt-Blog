import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function getAllPosts(req, res) {
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

		res.status(200).json(posts);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Internal server error" });
	}
}
