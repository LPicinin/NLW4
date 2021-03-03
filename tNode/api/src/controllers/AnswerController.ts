import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { SurveyUser } from '../models/SurveyUser'
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository'

class AnswerController {
    //http://localhost:3333/answers/1?u=id
    /**
     * Route Params => Parametros que compõe a rota
     * routes.get("/answers/:value")
     * 
     * Query Params => Busca, paginação, não obrigatórios
     * ?chave=Valor
     */
    async execute(request: Request, response: Response) {
        const { value } = request.params
        const { u } = request.query

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        })

        if(!surveyUser)
        {
            return response.status(400).json({
                error: "Survey User does not exists!"
            })
        }

        surveyUser.value = Number(value)

        const usr = await surveysUsersRepository.save(surveyUser)

        return response.json(usr)
    }
}

export { AnswerController }