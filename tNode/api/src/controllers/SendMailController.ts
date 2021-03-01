import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveyUser } from "../models/SurveyUser";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { UsersRepository } from "../repositories/UsersRepository";
import SendMailServices from "../services/SendMailServices";

class SendMailController {
    async execute(request: Request, response: Response) {
        const { email, survey_id } = request.body

        const usersRepository = getCustomRepository(UsersRepository)
        const surveysRepository = getCustomRepository(SurveysRepository)
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

        const userAlreadyExists = await usersRepository.findOne({email})

        if(!userAlreadyExists)
        {
            return response.status(400).json({
                error: "User does not exists"
            })
        }

        const surveyAlreadyExists = await surveysRepository.findOne({id:survey_id})

        if(!surveyAlreadyExists)
        {
            return response.status(400).json({
                error: "Survey does not exists"
            })
        }

        //salvar as informações na tabela save user
        const surveyUser = surveysUsersRepository.create({
            user_id: userAlreadyExists.id,
            survey_id
        })

        await surveysUsersRepository.save(surveyUser)
        //enviar email para o usuário
        await SendMailServices.execute(email, surveyAlreadyExists.title, surveyAlreadyExists.description)

        return response.json(surveyUser)
    }
}
export { SendMailController }