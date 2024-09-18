const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()


const app = express();
const port = process.env.PORT || 3000;

// Middleware function
app.use(express.json())
app.use(cors({
    origin: [
        'http://localhost:5173',
    ],
    credentials: true
}))

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3ytf5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const jobsCollection = client.db("careerNestDB").collection('allJobs');
        const applicationCollection = client.db("careerNestDB").collection('applications');

        app.get("/all-jobs", async (req, res) => {
            const result = await jobsCollection.find().toArray()
            res.send(result)
        })

        app.get("/job-details/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const response = await jobsCollection.findOne(query);
            res.send(response)
        })

        app.put("/job/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const data = req.body;
            const updatedData = {
                $set: {
                    jobApplicationNumber: data.jobApplicationNumber + 1
                }
            }
            const result = await jobsCollection.updateOne(query, updatedData);
            res.send(result)
        })

        app.post("/add-job", async (req, res) => {
            const job = req.body;
            const result = await jobsCollection.insertOne(job)
            res.send(result)
        })

        app.post("/applications", async (req, res) => {
            const data = req.body
            const result = await applicationCollection.insertOne(data);
            res.send(result)
        })

        app.post("/application-check", async (req, res) => {
            const data = req.body;
            const query = {
                jobId: data.id,
                email: data.email,
            }
            const result = await applicationCollection.findOne(query);
            res.send(result)
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get("/", (req, res) => {
    res.send("Career Nest Server Is Running...")
})

app.listen(port, () => console.log(`Server Is Running On ${port}`));