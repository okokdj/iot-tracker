import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = "mongodb+srv://oyunbay05:kaRVFQCjlBTIfHwX@iot-tracker.ae68m.mongodb.net/?retryWrites=true&w=majority&appName=iot-tracker";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
export async function GET() {
    async function run() {
        try {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            await client.db("admin").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
        } catch(error) {
            // Ensures that the client will close when you finish/error
            await client.close();
            console.error('No connection', error)
        }
    }
    run().catch(console.dir);
    try {
        return Response.json({ data: '' })

    } catch (error) {
        console.log(error)
    }
    return Response.json({ data: null })
}







