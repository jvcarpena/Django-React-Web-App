# Notes Management App

## Overview
This is a full-stack Notes Management Application that allows users to register, log in, create notes, and delete their own notes. The backend is built using Django REST Framework (DRF), while the frontend is developed with React.js.

## Features
- User registration and authentication
- Create, retrieve, and delete personal notes
- Protected routes for authenticated users
- Token-based authentication

## Tech Stack
### Backend:
- Django
- Django REST Framework
- PostgreSQL (or SQLite for development)

### Frontend:
- React.js
- React Router
- Axios (for API requests)

## API Endpoints
### Authentication
- `POST /register/` - Register a new user
- `POST /login/` - Obtain authentication token
- `POST /logout/` - Log out the user

### Notes
- `GET /notes/` - Get all notes for the authenticated user
- `POST /notes/` - Create a new note
- `DELETE /notes/:id/` - Delete a note

## Project Structure
```
notes-app/
│-- backend/
│   │-- manage.py
│   │-- notes_app/
│   │   │-- models.py
│   │   │-- views.py
│   │   │-- serializers.py
│   │   │-- urls.py
│   │-- db.sqlite3 (or PostgreSQL)
│
│-- frontend/
│   │-- src/
│   │   │-- pages/
│   │   │-- components/
│   │   │-- App.js
│   │   │-- index.js
│
│-- README.md
```

## Usage
1. Register a new user.
2. Log in to receive an authentication token.
3. Use the app to create, view, and delete personal notes.

## License
This project is licensed under the MIT License.

