const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const researcher = await connection('researchers').select('*');
    
        return response.json(researcher);
    },

    async create(request, response) {
        const { name, password, email, birthdate, workdate, city, uf, institution,
            graduationlvl, graduationinstitution, latteslink } = request.body;

        const id = generateUniqueId();

        await connection('researchers').insert({
            name, 
            password, 
            id,
            email, 
            birthdate, 
            workdate, 
            city, 
            uf, 
            institution,
            graduationlvl, 
            graduationinstitution, 
            latteslink
        })

        return response.json({ id });
    }
};