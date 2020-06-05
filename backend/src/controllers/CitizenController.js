const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const citizen = await connection('citizens').select('*');
    
        return response.json(citizen);
    },

    async create(request, response) {
        const { name, password, email } = request.body;

        const id = generateUniqueId();

        await connection('citizens').insert({
            name, 
            password, 
            id,
            email
        })

        return response.json({ id });
    }
};