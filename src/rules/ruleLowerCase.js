//
import Joi from '@hapi/joi'

/**
 * @description
 * { function_description }
 *
 * @param      {<type>}  value   The value
 * @return     {<type>}  { description_of_the_return_value }
 */
export default function ruleLowerCase(value) {
	return ! Joi.string().empty('').case('lower').validate(value, { convert:false }).error || 'Solo minusculas.'		
}