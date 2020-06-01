//
import Joi from '@hapi/joi'

/**
 * @description
 * { function_description }
 *
 * @return     {<type>}  { description_of_the_return_value }
 */
export default function tokenRule(value) {
	return ! Joi.string().empty('').token().validate(value, { convert:false }).error || 'Formato incorrecto.'
}