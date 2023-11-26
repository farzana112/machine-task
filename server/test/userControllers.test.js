// import request from 'supertest'
// import app from "./index.js"
// import supertest from 'supertest'
// import { registerUser } from '../controllers/userController'


// describe('User Registration end point',()=>{

// })


// userController.test.js

import request from 'supertest';
import app from '../app'; // Your Express app setup file
import { registerUser } from '../controllers/userController';
import supertest from 'supertest'

describe('User Registration Endpoint', () => {
    it('should register a new user', async () => {
        const userData = {
            name: 'Test User',
            email: 'test@example.com',
            password: 'testpassword',
            // Include other required fields
        };

        // Mocking request and response objects for the controller
        const req = { body: userData };
        let res = {};

        await registerUser(req, res);

        // Check the response status code and message
        expect(res.statusCode).toEqual(201);
        expect(res.message).toEqual('User registered successfully');
    });

    it('should not register a user with missing data', async () => {
        const userData = {
            name: 'Test User',
            // Missing email and password
        };

        // Mocking request and response objects for the controller
        const req = { body: userData };
        let res = {};

        await registerUser(req, res);

        // Check the response status code and message for failure cases
        expect(res.statusCode).toEqual(400);
        expect(res.message).toEqual('Invalid data provided');
    });

});
