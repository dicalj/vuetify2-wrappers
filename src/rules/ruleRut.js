/**
 * El metodo ruleRut() verifica el contenido de un string y confirma si cumple
 * la condicion de modulo-11 para los valores validos para el registro unico 
 * tributario chileno.
 *
 * @param   {string}  value   El valor de entrada
 * @return  {boolean|string}  Retorna 'true' si es valido, y un mensaje si es invalido.
 */
export default function ruleRut(value) {

	//
	var lower = value.toString().toLowerCase()
  var clean = lower.replace(/\./g,'').replace(/-/g, '')
  var body = clean.slice(0, -1)
  var digit = clean.slice(-1)

  //
  var sum = 0
  var max = 7
  var mul = 2

  //
  for(let i = 1; i <= body.length; i++) {
    sum = sum + (mul * clean.charAt(body.length - i))
    mul = mul < max ? mul + 1 : 2
  }

  //
  var verify = 11 - (sum % 11)

  //
  return (verify == 10 ? 'k' : verify == 11 ? '0' : verify) == digit || 'Rut invalido.'
}
