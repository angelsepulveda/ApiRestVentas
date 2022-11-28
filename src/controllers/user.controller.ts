import { Response, Request } from 'express'

export class UserController {
	getUsers(req: Request, res: Response): void {
		res.status(200).json({
			user: 'Angel',
		})
	}
}
