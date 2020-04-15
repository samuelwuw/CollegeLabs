const connection = require('../database/connection');

module.exports = {
        async create(request, response){
            const { email, password } = request.body;

            const researcher = await connection('researchers')
                .where('email', email)
                .andWhere('password', password)
                .select('name')
                .first();
            
            if(!researcher){
                return response.status(400).json({ error: "No researcher found with this email."});
            }

            return response.json(researcher);
        }
}