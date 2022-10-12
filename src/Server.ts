import express from 'express'
import appDataSource from './Data-source'

appDataSource.initialize().then(()=>{ 
        const app = express()

        app.use(express.json())
        app.get('/', (req,res)=>{
            return res.json('Hello World')
        })

        return app.listen(process.env.PORT, ()=>{
            console.log('Server Running')
        })
    })

