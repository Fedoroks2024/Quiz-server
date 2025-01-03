const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let submittedQuizzes = [];
const adminPassword = 'admin123'; //  Безопаснее хранить пароль в переменной окружения

app.post('/submit-quiz', (req, res) => {
    const quizData = req.body;
    submittedQuizzes.push(quizData);
    console.log('Получен квиз:', quizData);
    res.status(200).send('Квиз успешно получен');
});

app.post('/admin-login', (req, res) => {
    const { password } = req.body;
    if (password === adminPassword) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.get('/get-quizzes', (req, res) => {
    res.json(submittedQuizzes);
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
