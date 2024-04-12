# Real Estate Listings API

This project implements a simple RESTful API for managing real estate listings using TypeScript, Node.js, Express.js and Jest.

## Overview

The API allows users to perform the following operations on real estate listings:

- Add a new listing
- Retrieve all listings
- Delete a listing by ID

## Technology Stack

- TypeScript
- Node.js
- Express.js
- Jest (for testing)
- Supertest (for end-to-end testing)

## Project Structure

The project structure is as follows:

- **`src/`**: Contains the source code of the application.
  - **`app.ts`**: Handles Express application setup and defines API endpoints for managing real estate listings.
  - **`server.ts`**: Entry point of the application. Starts the server.
  - **`e2e/`**: Contains end-to-end testing scripts.
    - **`app.e2e.spec.ts`**: End-to-end tests using Jest and Supertest to ensure API functionality.

## Setup

1. Clone the repository:

```bash
git clone <repository_url>
cd <project_folder>
```

2. Install dependencies

```bash
npm install
```

## Usage

If you want to run the server from the TypeScript build:

```bash
npm start
```

Also if you want to run the server in dev mode:

```bash
npm run start:dev
```

The server will be running at http://localhost:9000 by default.

## API Endpoints

### Add a new listing

- URL: /api/v1/listings
- Method: POST
- Request Body:

  ```json
  {
    "id": "string",
    "title": "string",
    "price": "number",
    "description": "string"
  }
  ```

- Response: The added listing object with HTTP status code 201 (Created)
- Example:
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"id": "1", "title": "Beautiful House", "price": 200000, "description": "A lovely home in a serene neighborhood"}' http://localhost:9000/api/v1/listings
  ```

### Retrieve all listings

- URL: /api/v1/listings
- Method: GET
- Response: An array of all listings with HTTP status code 200 (OK)
- Example:
  ```bash
  curl http://localhost:9000/api/v1/listings
  ```

### Delete a listing

- URL: /api/v1/listings/:listingId
- Method: DELETE
- Response: The ID of the deleted listing with HTTP status code 200 (OK)
- Example:
  ```bash
  curl -X DELETE http://localhost:9000/api/v1/listings/1
  ```

## Testing

The project includes end-to-end tests using Jest and Supertest. To run the tests, use:

```bash
npm test
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

Let me know if you need further assistance, and than you for the opportunity!
