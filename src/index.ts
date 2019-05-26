require("dotenv").config()

import app from "./server"
import { MongoClient } from "mongodb"

const port = process.env.PORT || 8000

console.log("db uri:", process.env.DB_URI)

MongoClient.connect(process.env.DB_URI, {
  poolSize: 50,
  wtimeout: 2500,
  useNewUrlParser: true,
})
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  })
