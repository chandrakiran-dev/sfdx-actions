import {google} from 'googleapis';
import * as core from '@actions/core';

// Define the required scopes.
var scopes = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/firebase.database"
];

async function run(){
    const FIREBASE_CLIENT_EMAIL = core.getInput('FIREBASE_CLIENT_EMAIL');
    const FIREBASE_PRIVATE_KEY = core.getInput('FIREBASE_PRIVATE_KEY');

    // Authenticate a JWT client with the service account.
    var jwtClient = new google.auth.JWT(
        FIREBASE_CLIENT_EMAIL,
        null,
        FIREBASE_PRIVATE_KEY,
        scopes
    );

    // Use the JWT client to generate an access token.
    await jwtClient.authorize(function(error, tokens) {
        if (error) {
            console.log("Error making request to generate access token:", error);
        } else if (tokens.access_token === null) {
            console.log("Provided service account does not have permission to generate access tokens");
        } else {
            var accessToken = tokens.access_token;
            core.setOutput('ACCESS_TOKEN', accessToken);
        }
    });
}

run();  