import {Router} from 'express'
import { SurveysController } from './controllers/SurveysController'
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
const surveyController = new SurveysController()

router.post("/users", userController.create)
router.post("/surveys", surveyController.create)


export {router}