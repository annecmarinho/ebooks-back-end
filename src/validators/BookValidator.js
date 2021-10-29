const { celebrate, Segments, Joi} = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            título: Joi.string().required(),
            autor: Joi.string().required(),
            sinopse: Joi.string().required(),
            categoria: Joi.string().required(),
        }),
    }),
    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            book_id: Joi.string().required(),
        }),
    }),
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            book_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            título: Joi.string().optional(),
            autor: Joi.string().optional(),
            sinopse: Joi.string().optional(),
            categoria: Joi.string().optional(),
        })
        .min(1),
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            book_id: Joi.string().required(),
        }),
    }),
};