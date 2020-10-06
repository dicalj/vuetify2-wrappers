//
import htmlToText from 'html-to-text'

/**
 * @description
 * { function_description }
 *
 * @return     {<type>}  { description_of_the_return_value }
 */
export default (max, options = {}) => (value) => {
	return htmlToText.fromString(value, options).length < max || `Máximo ${max} caracteres.`
}