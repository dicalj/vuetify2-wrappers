//
import Joi from '@hapi/joi'

/**
 * El metodo ruleAlphaNumber() verifica que el contenido de un string tenga
 * solo numeros y caracteres alfabeticos.
 *
 * @param   {string}  value   El valor de entrada
 * @return  {boolean|string}  Retorna 'true' si es valido, y un mensaje si es invalido.
 */
export default function ruleAlphaNumber(value) {
  return ! Joi.string().empty('').alphanum().validate(value, { convert: false }).error || 'Solo caracteres alfanumericos.'
}
