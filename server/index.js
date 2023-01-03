import bodyParser from 'body-parser'
import clientRoutes from "routes/clients.js"
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import generalRoutes from "routes/general.js"
import helmet from 'helmet'
import managementRoutes from "routes/managements.js"
import mongoose from 'mongoose'
import morgan from 'morgan'
import salesRoutes from "routes/sales.js"

// server Configurations 

dotenv.config()
const app = express
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

// Routes 

app.use("/client", clientRoutes)
app.use("/general", generalRoutes)
app.use("/management", managementRoutes)
app.use("/sales", salesRoutes)