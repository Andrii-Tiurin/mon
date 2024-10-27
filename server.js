// Import necessary modules
import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql2';
import cors from 'cors';

// Create an instance of express
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'yc559307.mysql.tools', // Хост базы данных
  user: 'yc559307_mon', // Имя пользователя базы данных
  password: '2Lv3H*2bp_', // Пароль для пользователя
  database: 'yc559307_mon' // Имя базы данных
});

db.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
    return;
  }
  console.log('Подключение к базе данных успешно!');
});

// Routes
app.get('/api/users', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Ошибка получения пользователей:', err);
      res.status(500).send('Ошибка получения пользователей');
    } else {
      res.json(results);
    }
  });
});

app.post('/api/users', (req, res) => {
  const { name, email, role, status } = req.body;
  const query = 'INSERT INTO users (name, email, role, status) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, role, status], (err, result) => {
    if (err) {
      console.error('Ошибка добавления пользователя:', err);
      res.status(500).send('Ошибка добавления пользователя');
    } else {
      res.status(201).json({ id: result.insertId, ...req.body });
    }
  });
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, role, status } = req.body;
  const query = 'UPDATE users SET name = ?, email = ?, role = ?, status = ? WHERE id = ?';
  db.query(query, [name, email, role, status, id], (err) => {
    if (err) {
      console.error('Ошибка обновления пользователя:', err);
      res.status(500).send('Ошибка обновления пользователя');
    } else {
      res.status(200).send('Пользователь успешно обновлен');
    }
  });
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) {
      console.error('Ошибка удаления пользователя:', err);
      res.status(500).send('Ошибка удаления пользователя');
    } else {
      res.status(200).send('Пользователь успешно удален');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Сервер работает на http://localhost:${PORT}`);
});
