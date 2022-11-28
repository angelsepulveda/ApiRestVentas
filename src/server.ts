import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { UserRouter } from './routes/user.router'

class ServerBootstrap {
	public app: express.Application = express()
	private port: number = 8000

	constructor() {
		this.app.use(express.json())
		this.app.use(express.urlencoded({ extended: true }))
		this.app.use(morgan('dev'))
		this.app.use(cors())
		this.app.use('/api', this.routers())
		this.listen()
	}

	routers(): Array<express.Router> {
		return [new UserRouter().router]
	}

	listen(): void {
		this.app.listen(this.port, () => {
			console.log('server listening on port => ' + this.port)
		})
	}
}

new ServerBootstrap()
