import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
const users = []

app.post('/usuarios',  async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age : req.body.age
        }
    })

    res.status(201).json(req.body)

})

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

app.listen(3000)

/* passos: 
1- criar um usuario.    POST
2- listar todos os usuarios. GET
3- editar um usuário.  PUT/PATCH 
4- deletar um usuário. DELETE
*/
