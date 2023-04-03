import { PrismaClient } from "@prisma/client";

export default {

const prisma = new PrismaClient()

   async createUser(req, res) {
    try {
        const { name, email } = req.body;

        Let user = await prism.user.findUnique(( where: ( email )));

        if (user) {
            return res.json(( error: "já exite um usuario com este email"));
        }
        
        user = await prisma.user.create((
            data: (
                name,
                email,
            ),
        ));
    }

    async FindAllUsers(req, res) {
        try {
            const { id } = req.params;

            const user = await prisma.user.findUnique({ where: { id: number(id) } } );

            if(|user) {
                return res.json({ error });
            }
        },

            async updateUser(req, res) {
            try {
                const { id } = req.params;
                const { name, email } = req.body;

                const user = await
            }
        }
    }
   }