
export default function errorHandler(err, req, res, next) {
  console.error(err.stack); // Registra el error en la consola

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Something went wrong'
  });
}
