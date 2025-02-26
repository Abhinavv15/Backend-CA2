const express = require('express');
const cors = require('cors');

const PORT = 7676;
const app = express();

app.use(express.json());
app.use(cors());

const users = [
    { username: "Messi", age: 35, email: "Messi@gmail.com" },
    { username: "Ronaldo", age: 40, email: "Ronaldo@gmail.com" },
    { username: "Neymar", age: 30, email: "Neymar@gmail.com" }
];

app.post('/post', (req, res) => {
    try {
        const { username, age, email } = req.body;

        if (!username || !age || !email) {
            return res.json({ "Message": "Enter all the details" });
        }

        const newUser = { username, age, email };
        users.push(newUser);

        return res.json({ "Message": "User Added", "User": newUser });
    } catch (error) {
        return res.json({ "message": "Not Added", "error": error.message });
    }
});

app.get('/post', (req, res) => {
    try {
        return res.json({ "Message": "User Found", "Data": users });
    } catch (error) {
        return res.json({ "message": "User not Found", "error": error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});