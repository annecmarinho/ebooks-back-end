const { celebrate, Segments, Joi} = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
            endereço: Joi.string().required(),
            número: Joi.number().integer().required(),
            cidade: Joi.string().required(),
            estado: Joi.string().required(),
            descricao: Joi.string().required(),

        }),
    }),
    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        })
    }),
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().optional(),
            email: Joi.string().optional(),
            endereço: Joi.string().optional(),
            número: Joi.number().integer().optional(),
            cidade: Joi.string().optional(),
            estado: Joi.string().optional(),
            descricao: Joi.string().optional(),
        })
        .min(1),
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        }),
    }),
};