const Validaciones = () => {

  const _claveRegExp = /^([A-Za-z]{3})-([0-9]{3})$/;
  const _flotanteRegExp = /^[0-9]+([.][0-9]+)?$/;
  const _nominaRegExp = /^[0-9]{5}$/
  const _nombreRegExp = /^[A-Za-z]+(\s*[A-Za-z]*)*[A-Za-z]$/
  const _correoRegExp = /^(.\S*)@uei.com$/
  const _numerosRegExp = /^[0-9]{0,}$/;

  const esNumero = async (numero) => {
    await esVacio(numero, 'El ID del departamento');
    return new Promise((resolve, reject) => {
      if (numero.match(_numerosRegExp))
        resolve(true);
      else
        reject(`El id '${numero}' del departamento no puede ser vacío o contener letras 🙁`)
    });
  }

  const esCorreo = async (correo) => {
    if (correo == '') return true;

    return new Promise((resolve, reject) => {
      if (correo.match(_correoRegExp))
        resolve(true);
      else
        reject(`Mas lento!! 🔥... El correo '${correo}' no es valido, porfavor intenta algo como correo@uei.com. 😉`);
    });
  }

  const esNombre = async (nombre) => {
    await esVacio(nombre, 'El nombre del empleado')
    return new Promise((resolve, reject) => {
      if (nombre.match(_nombreRegExp))
        resolve(true)
      else
        reject(`Cuidado!!! 💣... El nombre del empleado '${nombre}' solo debe contener letras.`);
    })
  }

  const esNomina = async (nomina) => {
    await esVacio(nomina, 'Nomina del empleado');
    return new Promise((resolve, reject) => {
      if (nomina.match(_nominaRegExp))
        resolve(true);
      else
        reject(`Ufff... por poquito 🙌, la Nomina '${nomina}' debe tener almenos 5 digitos y no contener letras.`)
    });
  }

  const esClave = async (clave) => {
    await esVacio(clave, 'clave');
    return new Promise((resolve, reject) => {
      if (clave.match(_claveRegExp))
        resolve(true);
      else
        reject(`Un momeeeento... la clave '${clave}' no es valida, intenta con algo como ABC-001 😁`);
    })
  }

  const esVacio = (string = '', esperado) => {
    return new Promise((resolve, reject) => {
      if (string !== '')
        resolve(true);
      else
        reject(`Oh... espera: ${esperado} no puede ser vacio, porfavor intenta con alguno valido 👀!`);
    });
  }

  const esFlotante = async (flotante) => {
    await esVacio(flotante, 'Duracion del curso');
    return new Promise((resolve, reject) => {
      if (flotante.match(_flotanteRegExp))
        resolve(true);
      else
        reject(`Te atrape!... El numero ${flotante} solo pueden ser numeros o incluir un punto decimal 😉`);
    })
  }

  return {
    esNombre
  }
}

module.exports = Validaciones;

//VALIDACION DE INSTRUCTORES
// validaciones().instructorValido('uei-123', 'Miguel', 'Medina', 'Ortiz')
//   .then( res => console.log(res))
//   .catch( error => console.log(error));

//VALIDACION DEL CURSO
// validaciones().cursoValido('abm-001', 'Curso de recursos humanos', '1.5')
//   .then( res => console.log(res))
//   .catch( error => console.log(error));


//VALIDACION DE EMPLEADOS
// validaciones().empleadoValido('12345', 'Miguel Angel', 'Medina', 'Ortiz', 'angel.medina@uei.com', 'Capturista')
//   .then( res => console.log(res))
//   .catch( error => console.log(error))
