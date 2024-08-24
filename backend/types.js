const zod = require("zod")

const createtodo = zod.object ({

    title : zod.string().min(1), 
    description : zod.string().min(1)
})

const updatetodo = zod.object({

    id : zod.string()
})

module.exports = {

    createtodo : createtodo,
    updatetodo : updatetodo 
}