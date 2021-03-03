import {Router} from 'express'
import { AnswerController } from './controllers/AnswerController'
import { NpsController } from './controllers/NpsController'
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
const answersController = new AnswerController()
const npsController = new NpsController()

router.post("/users", userController.create)
router.post("/surveys", surveysController.create)
router.post("/sendMail", sendMailControler.execute)

router.post("/answers/:value", answersController.execute)

router.get("/surveys", surveysController.show)
router.get("/users", userController.show)
router.get("/nps/:survey_id", npsController.execute)

export {router}