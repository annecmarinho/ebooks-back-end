const { celebrate, Segments, Joi} = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().required(),
            email: Joi.string().required(),
            endereço: Joi.string().required(),
            número: Joi.string().required(),
            cidade: Joi.string().required(),
            estado: Joi.string().required(),
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
            número: Joi.string().optional(),
            cidade: Joi.string().optional(),
            estado: Joi.string().optional(),
        })
        .min(1),
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        }),
    }),
};