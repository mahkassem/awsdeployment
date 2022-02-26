import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import db from './database'

dotenv.config()

const app: Application = express() // create an express application
const port = process.env.PORT || 80 // set the port

// Defaul middlewares
app.use(
    cors(), // enable cors
    morgan('dev'), // log requests to the console
    express.json(), // parse application/json
)

app.get('/', (req, res) => {
    res.send('The API is working!');
});

app.get('/quotes', async (req, res) => {
    const quotes = await db.query('SELECT text, author FROM quotes');
    res.send(quotes.rows).status(200)
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})

export default app