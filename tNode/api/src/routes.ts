import {Router} from 'express'
import { UserController } from './controllers/UserController'

/**
 * GET => Buscar
 * Post => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * Patch => Alteração especifica
 */

const router = Router()


const userController = new UserController()

router.post("/users", userController.create)


export {router}