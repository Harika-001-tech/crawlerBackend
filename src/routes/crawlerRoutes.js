const { getProductUrls } = require('../controllers/crawlerController');

const setCrawlerRoutes = (app) => {
    app.post('/crawl', getProductUrls);
};

module.exports = { setCrawlerRoutes };