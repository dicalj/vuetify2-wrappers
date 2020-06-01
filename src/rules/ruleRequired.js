//
import Joi from '@hapi/joi'

/**
 * @description
 * { function_description }
 *
 * @return     {<type>}  { description_of_the_return_value }
 */
export default function ruleRequired(value) {
	return !! Joi.required().validate(value).value || 'Campo de requerido.'
}