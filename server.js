import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())


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

app.get('/usuarios', async (req, res) => {
    
    const users = await prisma.user.findMany()
    res.status(200).json(users)
})

app.put('/usuarios/:id',  async (req, res) => {

    await prisma.user.update({
        where: {
            id: ""
        },

        data: {
            email: req.body.email,
            name: req.body.name,
            age : req.body.age
        },
    })
})

app.listen(3000)

/* passos: 
1- criar um usuario.    POST
2- listar todos os usuarios. GET
3- editar um usuário.  PUT/PATCH 
4- deletar um usuário. DELETE
*/
