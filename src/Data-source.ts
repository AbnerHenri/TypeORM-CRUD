import 'dotenv/config' 
import 'reflect-metadata'
import { DataSource } from "typeorm"

const myPort = process.env.DB_PORT as number | undefined

const appDataSource = new DataSource({
    type : "postgres",
    host : process.env.DB_HOST,
    port : myPort,
    username : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    entities : [`${__dirname}/**/Entities/*.{ts, js}`],
    migrations : [`${__dirname}/**/Migrations/*.{ts, js}`]

})

export default appDataSource;