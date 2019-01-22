const express = require('express');
const bodyParser = require('body-parser');
const functions = require('firebase-functions');
const admin = require(‘firebase-admin’);
const {WebhookClient,Card,Suggestion} = require('dialogflow-fulfillment');
const {dialogflow}= require(‘actions-on-google’);
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
const app= dialogflow()


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


app.get("/test",function(req,res){
    var visualRecognition = new VisualRecognitionV3({
    version: '2018-03-19',
    iam_apikey:'k-B-HtEAvUgwQ-9pG6Hnw4xX_apnRtj_aokRFEjuBXv6'
  
  });
  
  return new Promise((resolve, reject)=>{
  var params = {
    url:"https://www.lg.com/ca_en/images/tvs/42cs560/gallery/lg-monitors-cs560-large01.jpg"
  };
  
  visualRecognition.classify(params, function(err, response) {
    if (err)
      console.log(err);
    else
    //Store response into a string
      var result= JSON.stringify(response, null, 2);
      //res.write(response.images.constructor.name + "\n");
      //res.write(response.images[0].classifiers.constructor.name+"\n");
      //res.end(response.images[0].classifiers[0].classes[0].score+"\n");
     var class_col= response.images[0].classifiers[0].classes;
     //to get the array of classes (category classification)
     for(i=0; i<class_col.length;i++){
         res.write(class_col[i].class + "\n") //getting the class name
         res.write(class_col[i].score + "\n") //getting the score
     }
     res.end("END");
      console.log(result);
      
  });
  
  })
  


var listener = exapp.listen(process.env.PORT,process.env.IP,function(){
  console.log("server has started");
   console.log('Listening on port ' + listener.address().port);
});

