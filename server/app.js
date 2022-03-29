import express from 'express'
import cors from 'cors'
import path from 'path'
import morgan from 'morgan'

import markersRouter from './routes/marker.router'

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/markers', markersRouter)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

export default app