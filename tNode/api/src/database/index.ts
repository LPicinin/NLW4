import {Connection, createConnection, getConnectionOptions} from 'typeorm'

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions()

    return createConnection(
        Object.assign(defaultOptions, {
            database:  process.env.NODE_ENV === 'test' ? 
            "./src/database/database.test.sqlite" : 
            defaultOptions.database
        })
    )
}

//https://nextlevelweek.com/episodios/node/4/edicao/4