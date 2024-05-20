const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Usar el puerto definido en la variable de entorno o 3000 por defecto.

// Asegúrate de que el path de los archivos estáticos sea el correcto
app.use(express.static(path.join(__dirname, '/')));

// Configura el servidor para que apunte a index.html en el directorio correcto
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
