//
import htmlToText from 'html-to-text'

/**
 * @description
 * { function_description }
 *
 * @return     {<type>}  { description_of_the_return_value }
 */
export default (max) => (value) => {
	return htmlToText.fromString(value).length < max || `Máximo ${max} caracteres.`
}