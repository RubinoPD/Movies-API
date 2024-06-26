# Movies API

## Overview
This API provides access to movie genres and allows discovering movies using filters.

## Endpoints

### Get All Genres
- **URL**: `/genre`
- **Method**: `GET`
- **Description**: Retrieves all movie genres from the database.
- **Response**:
  ```json
  [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    }
  ]

### Fetch and store Genres from TMDB
- **URL**: `/genre`
- **Method**: `POST`
- **Description**: Fetches movie genres from TMDB API and stores them in the database.
- **Response**:
  ```json
  [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    }
  ]

### Discover movies.
- **URL**: `/discover-movie`
- **Method**: `GET`
- **Description**: Retrieves movies based on filters from TMDB API.
- **Query Parameters**: 
    - `with_genres` (optional): Comma-separated list of genre IDs. 
    - `page` (optional): Page number for pagination.
    - `vote_average` (optional): Minimum vote average.
    - `vote_count` (optional): Minimum vote count.
    - `primary_release_date.gte` (optional): Release date after (YYYY-MM-DD).
    - `primary_release_date.lte` (optional): Release date before (YYYY-MM-DD).
- **Response**:
  ```json
  [
    {
  "page": 1,
  "results": [
    {
      "id": 1,
      "title": "Movie Title",
      "overview": "Movie description",
      "vote_average": 8.5,
      "release_date": "2021-01-01"
    }
  ],
  "total_pages": 10,
  "total_results": 100
    }
  ]

## How to setup a local environment.

### 1. Ensure you have .env file with the following variables
    ```
    API_KEY=your_tmdb_api_key
    MONGODB_URI=your_mongodb_connection_string
    PORT=3000


### 2. Run the server
    ```
    npm install
    npm start dev


