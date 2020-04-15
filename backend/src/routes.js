const express = require('express');

//validação
const { celebrate, Segments, Joi } = require('celebrate');

const ResearcherController = require('./controllers/ResearcherController');
const PostController = require('./controllers/PostController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.required(),
        password: Joi.required(),
    })
}) ,SessionController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.get('/researchers', ResearcherController.index);

routes.post('/researchers', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().required().email(),
        birthdate: Joi.string().required(),
        workdate: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
        institution: Joi.string().required(),
        graduationlvl: Joi.string().required(),
        graduationinstitution: Joi.string().required(),
        latteslink: Joi.string().required()
    })
}), ResearcherController.create);


routes.get('/posts', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}) ,PostController.index);


routes.post('/posts',celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}) ,PostController.create);

routes.delete('/posts/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), PostController.delete);


module.exports = routes;