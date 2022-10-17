import express from 'express'
import appDataSource from './Data-source'
import Route from './Routes'

appDataSource.initialize().then(()=>{ 
        const app = express()

        app.use(express.json())
        app.use(Route)

        return app.listen(process.env.PORT, ()=>{
            console.log('Server Running')
        })
    })

