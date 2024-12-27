# Web Crawler Backend

This project is an Express API that implements a web crawler to discover and list all product URLs across multiple e-commerce websites. You can provide a list of domains, and the API will return a comprehensive list of product URLs found on each of the given websites.

## Features

- Crawl multiple e-commerce websites to find product URLs.
- Simple API endpoint to trigger the crawling process.
- Uses `axios` for HTTP requests and `cheerio` for HTML parsing.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/crawler-backend.git
    cd crawler-backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    npm start
    ```

## API Endpoints

### POST /crawl

Crawl the provided list of domains to find product URLs.

#### Request Body

- `domains` (array of strings): List of e-commerce domains to crawl.

#### Example
This code works only for websites having products with url including "/product". If the sites contain different urls for product, the code has to be modified to include the website specific search term to identify products.

```json
{
    "domains": [
        "https://www.masterdynamic.com/",
        "https://www.wearfigs.com/"
    ]
}
```

#### Response
- `productUrls` (object): A mapping of each domain to an array of discovered product URLs.

```json
{
    "productUrls": {
       {
    "productUrls": {
        "https://www.kitandace.com/": [
            "https://www.kitandace.com/products/serenity-flared-pull-on-pants-black",
            "https://www.kitandace.com/products/oslo-recycled-quilted-jacket-light-tan"
        ],
        "https://www.masterdynamic.com/": [
            "https://www.masterdynamic.com/products/mw75-neuro",
            "https://www.masterdynamic.com/products/me05"
        ]
    }
}
    }
}
```

#### Project Structure
```
├── src
│   ├── app.js
│   ├── controllers
│   │   └── crawlerController.js
│   ├── routes
│   │   └── crawlerRoutes.js
│   └── services
│       └── crawlerService.js
├── package.json
└── README.md
```

#### Dependencies
- `express`: Web framework for Node.js.
- `axios`: Promise-based HTTP client for the browser and Node.js.
- `cheerio`: Fast, flexible, and lean implementation of core jQuery designed specifically for the server.

