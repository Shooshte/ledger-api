import bodyParser from "body-parser"
import cors from "cors"
import express from "express"
import morgan from "morgan"

const app = express()

app.use(cors())
process.env.NODE_ENV !== "prod" && app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.status(200).json({ message: "The living proof that doing nothing pays." })
})

// catchall route for all unregistered routes
app.use("*", (req, res) => res.status(404).json({ error: "Route not found." }))

export default app
