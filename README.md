# Simple 3-Tier Rule Engine

This project implements a simple 3-tier rule engine application using Abstract Syntax Tree (AST) to evaluate user eligibility based on various attributes such as age, department, income, and experience.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Example Request](#example-request)
- [Front-end](#front-end)
- [Running the Application](#running-the-application)
- [License](#license)

## Getting Started

Follow these instructions to set up and run the application on your local machine.

### Prerequisites

- Node.js (version 14 or later)
- npm (Node Package Manager)
- SQLite (for the database)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rule-engine.git
   cd rule-engine
2. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
3. Install dependencies for the frontend:
    ```bash
    cd ../frontend
    npm install

### Usage

API Endpoints
  The backend provides the following API endpoints:
    Create Rule:
      -POST /api/rules/create
      -Request body:
      -{ "rule_string": "age > 30 AND department == 'IT'" }
    Evaluate Rule:
      -POST /api/rules/evaluate
      -Request body:
            { 
            "rule_string": "age > 30 AND department == 'IT'", 
            "userData": { "age": 35, "department": "IT" } 
            }
    Get All Rules:
      -GET /api/rules/all
Example Request
    -Here’s an example of how to evaluate a rule:
    -Request:
            POST /api/rules/evaluate
            Content-Type: application/json
                  {
                    "rule_string": "age > 30 AND department == 'IT'",
                    "userData": {
                      "age": 35,
                      "department": "IT",
                      "salary": 50000,
                      "experience": 5
                    }
                  }
    -Response:
              {
                "evaluation": true
              }

### Front-end

The front-end of the application is built using React. It provides a user-friendly interface to create rules and evaluate them against user data.

Running the Front-end
1. Navigate to the frontend directory:
     ```bash
     cd frontend
2. Start the development server:
     ```bash
     npm start
3. Open http://localhost:3000 to view the application in your browser.

### Running the Application

To run the backend server:
1. Navigate to the backend directory:
   ```bash
   cd backend
2. Start the backend server:
   ```bash
   npm start
Make sure the backend server is running before you start the front-end application.

### License
This project is licensed under the MIT License.

Feel free to adjust any details as needed, such as the repository link or any specific instructions related to your project!
               
    

