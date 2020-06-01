//
import Joi from '@hapi/joi'

/**
 * El metodo ruleEmail() verifica que el contenido de un string cumpla el 
 * formato de correo electronico.
 *
 * @param   {string}  value   El valor de entrada
 * @return  {boolean|string}  Retorna 'true' si es valido, y un mensaje si es invalido.
 */
export default function ruleEmail(value) {
  return ! Joi.string().email({ tlds: { allow: false } }).validate(value, { convert:false }).error || 'Formato incorrecto.'
}