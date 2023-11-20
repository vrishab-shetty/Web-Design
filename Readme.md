## Backend Part

##### Getting Started

1. Install dependencies: `npm install`
2. Set up a MongoDB database and update the connection string in `server.js`.
3. Run the server: `npm start`

##### Project Structure

- `server.js`: Entry point of the server.
- `models/`: Contains Mongoose models for MongoDB.
- `controllers/`: Handles business logic.
- `services/`: Implements business logic and interacts with the database.
- `routers/`: Defines API routes.

##### Available Scripts

- `npm start`: Start the server. (localhost Port used:3001)
- `npm test`: Run tests.

## Frontend Part

##### Getting Started

1. Install dependencies: `npm install`
2. Run the development server: `npm start` (Port Used:3000)

##### Project Structure

- `src/`: Contains the source code.
  - `components/`: Reusable React components.
  - `pages/`: Individual pages of the application.
  - `navbar/`: custom navbar for the page.
  - `services/`: Functions for interacting with the backend API.
  - `App.js`: Main component and routing setup.
  - `LoginRoutes.js`: React Routes for Login page.
  - `PageRoutes.js`: React Routes for main pages. 

##### Components

**Box**: plain white background box with title and max_width attributes.

**Button**: app themed button with disable and onClick callback attributes.

**Button**: app themed button with disable and onClick callback attributes.

**CardList**: displays Card components dynamically using items attribute.

**Card**: component used to represent database data.

**TextBox**: creates input Fields


