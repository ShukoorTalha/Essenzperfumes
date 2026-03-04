const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 9222;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'essenz-perfumes.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
