/**
 * Arquivo: server.js
 * Descrição: Arquivo responsável por toda a configuração e execução de todo o Back-End ('Employee')
 * Data: 25/03/2021
 * Autor: Alexandre Munis <@AlexandreMunis>
 */

const app = require('./src/app')

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Acessar http://localhost:${port}`);
  console.log(`Servidor executando na porta ${port}!!!`);
})