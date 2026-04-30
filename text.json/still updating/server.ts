import express from "express"
import path from "path"
import http from "http"

const port: number = 3000

class App {
    private server: http.Server
    private port: number

    constructor(port: number) {
        this.port = port
        const app = express()

        app.use(express.static(path.join(__dirname, '../client')))
        app.use(express.json())

        app.post('/log-position', (req, res) => {
            const { camPos, lookAt } = req.body
            console.log('\n\x1b[32m📍 ANNOTATION POSITION CAPTURED\x1b[0m')
            console.log('\x1b[33m' + JSON.stringify({
                title: 'NEW ANNOTATION',
                description: '',
                camPos,
                lookAt,
            }, null, 2) + '\x1b[0m')
            res.json({ ok: true })
        })

        this.server = new http.Server(app)
    }

    public Start() {
        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}.`)
        })
    }
}

new App(port).Start()
