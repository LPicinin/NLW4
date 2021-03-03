import {Router} from 'express'
import { SendMailController } from './controllers/SendMailController'
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
const surveysController = new SurveysController()
const sendMailControler = new SendMailController()

router.post("/users", userController.create)
router.post("/surveys", surveysController.create)
router.post("/sendMail", sendMailControler.execute)

router.get("/surveys", surveysController.show)
router.get("/users", userController.show)


export {router}