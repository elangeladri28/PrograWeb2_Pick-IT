
// const _claveRegExp = /^([A-Za-z]{3})-([0-9]{3})$/;
// const _flotanteRegExp = /^[0-9]+([.][0-9]+)?$/;
// const _nominaRegExp = /^[0-9]{5}$/
// const _nombreRegExp = /^[A-Za-z]+(\s*[A-Za-z]*)*[A-Za-z]$/
// const _correoRegExp = /^(.\S*)@uei.com$/
// const _numerosRegExp = /^[0-9]{0,}$/;

const _just_letters = /^[A-Za-z\s]+$/
const _pwd = /^((?=.+[A-Za-z])(?=.+\d)(?=.+[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,})$/

const justLetters = (text = '') => {
  if (text.length == 0 || !text.match(_just_letters))
    throw new Error('Solo puede contener letras');


    return true;
}

const pwd = (pwd = '') => {
  if(pwd.length == 0 || !pwd.match(_pwd))
    throw new Error('La constrasenia no es valida');

  return true;
}

// const esNumero = async (numero) => {
//   await esVacio(numero, 'El ID del departamento');
//   return new Promise((resolve, reject) => {
//     if (numero.match(_numerosRegExp))
//       resolve(true);
//     else
//       reject(`El id '${numero}' del departamento no puede ser vacío o contener letras 🙁`)
//   });
// }

module.exports = {
  justLetters,
  pwd
}
