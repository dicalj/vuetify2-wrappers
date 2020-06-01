//
import Joi from '@hapi/joi'

/**
 * @description
 * { function_description }
 *
 * @return     {<type>}  { description_of_the_return_value }
 */
export default (min) => (value) => {
	return ! Joi.number().min(min).validate(value).error || `Mínimo ${min}.`
}