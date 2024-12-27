const express = require('express');
const { setCrawlerRoutes } = require('./routes/crawlerRoutes');

const app = express();
const port = 3000;

app.use(express.json());
setCrawlerRoutes(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});