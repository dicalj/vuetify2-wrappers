//
import Joi from '@hapi/joi'

/**
 * @description
 * { function_description }
 *
 * @return     {<type>}  { description_of_the_return_value }
 */
export default (max) => (value) => {
	return ! Joi.string().max(max).validate(value).error || `Máximo ${max} caracteres.`
}