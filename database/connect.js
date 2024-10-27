const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'yc559307.mysql.tools',  // Замените на имя хоста вашей базы данных
  user: 'yc559307_mon',              // Замените на имя пользователя базы данных
  password: '2Lv3H*2bp_',    // Замените на пароль пользователя базы данных
  database: 'yc559307_mon',     // Замените на имя вашей базы данных
  port: 3306                    // Обычно 3306 для MySQL
});

db.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных: ', err);
    return;
  }
  console.log('Успешное подключение к базе данных.');
});

module.exports = db;
