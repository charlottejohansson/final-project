# Project Auth API

This project's goal was to build an API with authentication using access token and securly save passwords in a database. We also create a frontend with form where users can register, sign in and only then see restricted content.

## The problem

The backend was made with Express API using mongoose and MongoDB for our user database. Our main endpoints are:

A POST endpoint to create new user.
https://project-auth-kristin-josefine.netlify.app/register

A POST endpoint for existing users to sign in.
https://project-auth-kristin-josefine.netlify.app/login

A GET endpoint that is restricted with authentication middleware so it is only accessible with a valid access token that we receive from the database.
https://project-auth-kristin-josefine.netlify.app/thoughts


## View it live

Fontend: https://project-auth-kristin-josefine.netlify.app

Backend: https://project-auth-3adyn7z7ja-uc.a.run.app
