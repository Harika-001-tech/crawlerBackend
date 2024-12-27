const { crawlWebsites } = require('../services/crawlerService');

const getProductUrls = async (req, res) => {
    const { domains } = req.body;
    if (!domains || !Array.isArray(domains)) {
        return res.status(400).json({ error: 'Invalid input. Expected an array of domains.' });
    }

    try {
        const productUrls = await crawlWebsites(domains);
        res.json({ productUrls });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while crawling websites.' });
    }
};

module.exports = { getProductUrls };