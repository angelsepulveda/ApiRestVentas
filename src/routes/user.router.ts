import { UserController } from '../controllers/user.controller'
import { Request, Response } from 'express'
import { BaseRouter } from './router'

export class UserRouter extends BaseRouter<UserController> {
	constructor() {
		super(UserController)
	}

	routes(): void {
		this.router.get('/users', (req: Request, res: Response) =>
			this.controller.getUsers(req, res)
		)
	}
}
