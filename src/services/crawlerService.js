const axios = require('axios');
const cheerio = require('cheerio');

const crawlWebsites = async (domains) => {
    const productUrls = {};

    for (const domain of domains) {
        console.log("Crawling...", domain);
        try {
            const response = await axios.get(domain);
            const $ = cheerio.load(response.data);
            const urls = new Set();

            $('a').each((_, element) => {
                const href = $(element).attr('href');
                if (href && (href.indexOf('/product/') != -1 || href.indexOf('/products/') != -1)) {
                    urls.add(new URL(href, domain).href);
                }
            });

            productUrls[domain] = Array.from(urls);
        } catch (error) {
            console.error(`Error crawling ${domain}:`, error);
            productUrls[domain] = [];
        }
        console.log(`Found ${productUrls[domain].length} product urls for domain ${domain}`);
    }

    return productUrls;
};

module.exports = { crawlWebsites };