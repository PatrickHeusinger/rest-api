const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});

app.get('/api/users', (req, res) => {
    const users = [
        {id: 1, name: 'Patrick'},
        {id: 2, name: 'John'}
    ];
    res.json(users);
})