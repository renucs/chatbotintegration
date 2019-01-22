const express = require('express');
const bodyParser = require('body-parser');
const functions = require('firebase-functions');
const admin = require(‘firebase-admin’);
const {WebhookClient,Card,Suggestion} = require('dialogflow-fulfillment');
const {dialogflow}= require(‘actions-on-google’);
//app=


process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
function fallback(agent) {
   agent.add(`I am alive!!!`);
 }

 // Run the proper function handler based on the matched Dialogflow intent name
 let intentMap = new Map();
 intentMap.set('Default Welcome Intent', welcome);
 intentMap.set('Default Fallback Intent', fallback);
intesntMap.set(‘GetImageDetailIntent’ ,testImage);
 agent.handleRequest(intentMap);
})
);

const app= express().use(bodyParser,json());
app.post(‘/fulfillment’)
var listener = exapp.listen(process.env.PORT,process.env.IP,function(){
  console.log("server has started");
   console.log('Listening on port ' + listener.address().port);
});

