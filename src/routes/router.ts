import { Router } from 'express'

export class BaseRouter<T> {
	router: Router
	controller: T

	constructor(controller: { new (): T }) {
		this.router = Router()
		this.controller = new controller()
		this.routes()
	}

	routes(): void {}
}
