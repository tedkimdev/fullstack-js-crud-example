# What I did
## Server
- morgan for logging
- Sequelize for ORM
- DB: PostgreSQL
- Seed data
- Employee API (CRUD)

## Frontend
- Next.js
- Redux
- Redux Saga for side effects like async call(REST API)
- Styled Component
- React Table
- axios for communication with REST API
- React Bootstrap

### How to run
- `docker-compose up --build` to build and run PostgreSQL
- `npm run seed or yarn seed` to seed data on database
- `npm run dev` to run

### To Do
- Validation check
- Style pages on frontend
- Refactor frontend folder hierarchy
- Sort employees
- Confirm message before delete


# Plexxis Interview Exercise

## Requirements
Create a simple but __impressive__ (looks good, works well, has intuitive design, etc.) CRUD application that can do the following:

1) Retrieve employees from a REST API  
2) Display the employees in a React application  
3) Has UI mechanisms for creating and deleting employees  
4) Has API endpoints for creating and deleting employees  
5) Edit your version of the `README.md` file to explain to us what things you did, where you focussed your effort, etc.

*Read over the `Bonus` objectives and consider tackling those items as well*

## Bonus (Highly Encouraged)

1) Use a relational database to store the data (SQLite, MariaDB, Postgres)  
2) UI mechanisms to edit/update employee data  
3) Add API endpoint to update employee data  
4) Use [React Table](https://react-table.js.org)  

## Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). The front-end app runs off localhost:3000. The REST API is located in the /server folder and runs off localhost:8080. The data is being served from a JSON file located in the /server/data folder. Run `npm start` to start both servers.

## Getting it Done
* You are free to use whatever libraries that you want. Be prepared to defend your decisions.
* There is no time limit. Use as little or as much time as is necessary to showcase your abilities.
* You should fork or clone our repository into your own repository.
  * Send us the link when you are done the exercise (pglinker at plexxis dot com).

If you do well on the test, we will bring you in for an interview. Your test results will be used as talking points.  

 __This is your chance to amaze us with your talent!__
