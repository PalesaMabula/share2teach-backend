# Share2Teach Backend

This repository contains the backend code for the Share2Teach project, a web-based platform for accessing and sharing educational resources. The backend is built with Node.js and Express, and it handles all business logic, database interactions, and document storage management.

## Features

- User authentication and authorization using JWT tokens
- RESTful API for CRUD operations on educational resources
- Integration with PostgreSQL for structured data storage
- Secure document storage in Amazon S3
- File processing (e.g., adding watermarks, converting files)
- Logging and monitoring of user actions

## Technologies Used

- **Node.js**: Server-side JavaScript runtime
- **Express**: Web framework for Node.js
- **PostgreSQL**: Relational database for structured data
- **Amazon S3**: Object storage service for document storage
- **JSON Web Tokens (JWT)**: For secure authentication
- **bcrypt**: For password hashing
- **AWS SDK**: For interacting with Amazon S3

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- PostgreSQL
- AWS account with access to S3

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/EbenFourie/share2teach-backend.git
   cd share2teach-backend
