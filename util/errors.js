
const errors = {
  '1001': {
    http: 400,
    message: 'Ya firmaste el libro!',
  },
  '1002': {
    http: 404,
    message: 'Nombre no encontrado',
  }
}

module.exports = function(code) {
  const err = new Error();
  err.message = errors[code].message;
  err.status = errors[code].http;
  err.code = code;

  return err;
}