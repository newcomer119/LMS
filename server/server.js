import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import clerkWebHooks from './controllers/Webhook.js'

const app = express()

// Middlewares 
app.use(cors())

// connecting 
await connectDB()

// routes
app.get('/', (req,res) => res.send("API WORKING"))
app.post('/clerk', express.json(), clerkWebHooks)

// PORT 
const PORT = process.env.PORT || 5000 
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})