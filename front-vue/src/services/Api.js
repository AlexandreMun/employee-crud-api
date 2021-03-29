/*
* Descrição: arquivo responsável por iniciar o 'axios' e as requisições da url base dos HTTP's
*/

import axios from 'axios';

export default () => axios.create({
  // 'baseURL' do Back-End -> fará a comunicação do Front-End com o Back-End
  baseURL: 'http´://localhost:3000/api',
});
