# CryptoStats

CryptoStats is a Node.js application that tracks the current price, market cap, and 24-hour price change of cryptocurrencies like Bitcoin, Ethereum, and Matic using data from CoinGecko. It runs a background job every two hours to fetch and store this data in a MongoDB database.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- **Automated Data Fetching**: Retrieves the latest cryptocurrency data every two hours.
- **API Access**: Provides endpoints to retrieve the latest statistics for specific cryptocurrencies.
- **Statistical Analysis**: Calculates and returns the standard deviation of cryptocurrency prices based on historical data.

## Technologies

- **Backend**: Node.js, Express
- **Database**: MongoDB (with Mongoose)
- **APIs**: CoinGecko API
- **Utilities**: node-fetch, node-cron, dotenv

## Prerequisites

- **Node.js**: Version 14 or later
- **MongoDB**: Local installation or a MongoDB Atlas account
- **npm**: Node package manager

## Setup Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/jayanthmajji/CryptoStats
cd cryptoStats
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory and add your MongoDB connection string:

```env
MONGO_URI=<your_mongodb_connection_string>
PORT=3000
API_KEY = *****
```

> **Note**: CoinGecko's API does not require an API key.

### Step 4: Start the Server

To start the application in development mode, run:

```bash
npm run dev
```

The server will start on [http://localhost:3000](http://localhost:3000).

## Usage

The application automatically fetches and stores cryptocurrency data every two hours. You can interact with the API endpoints to retrieve the latest data and statistical analyses.

## API Endpoints

### GET `/api/stats?coin=bitcoin`

Retrieve the latest statistics for a specific cryptocurrency.

- **URL Parameters**:

  - `coin`: This is a name of the coin (e.g., `bitcoin`, `ethereum`, `matic-network`).

- **Response**:

  ```json
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "current_price": 50000,
    "market_cap": 900000000000,
    "price_change_24h": -2.5
  }
  ```

### GET `/api/deviation?coin=bitcoin`

Retrieve the standard deviation of the cryptocurrency's price based on historical data.

- **URL Parameters**:

  - `coin`: This is a name of the coin (e.g., `bitcoin`, `ethereum`, `matic-network`).

- **Response**:

  ```json
  {
    "id": "bitcoin",
    "standard_deviation": 1500.75
  }
  ```
