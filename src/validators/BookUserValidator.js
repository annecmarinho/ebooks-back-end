const { celebrate, Segments, Joi} = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            user_id: Joi.string().required(),
            book_id: Joi.string().required(),
        }),
    }),
    getByUser: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        }),
    }),
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            book_id: Joi.string().optional(),
        })
        .min(1),
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        }),
    }),
};