import express from 'express'
import cors from 'cors'

import postgresClient from './config/db.js'

import userRouter from './routers/userRouter.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/users', userRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    postgresClient.connect(err => {
        if(err) {
            console.error('connection error', err.stack)
        }else {
            console.log('db connection successful')
        }
    })
})