import express from "express"
import authRoutes from "./routes/authRoutes.js"
import cors from "cors"

const app = express()

//middleware
app.use(cors())
app.use(express.json())


//routes
app.use("/api/v1/auth", authRoutes)

app.get("/", (req,res) => {
    res.send("<h1>Practical exam</h1>")
})

export default app