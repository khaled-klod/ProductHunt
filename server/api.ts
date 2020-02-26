
const express = require('express');
var unirest = require('unirest');
var cors = require('cors');
require('dotenv').config();




const port = process.env.PORT || 4201;
const apiUrl = process.env.APIURL;
const authUrl = process.env.AUTHURL;
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

console.log(apiUrl);
console.log(process.env.ACCESS_TOKEN);
console.log(client_secret);


//if (process.env.NODE_ENV === "production") 
if(!process.env.ACCESS_TOKEN){
  let token;


    
    var req = unirest('POST', authUrl)
  .headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Host': 'api.producthunt.com'
  })
  .send({
    "client_id": client_id,
    "client_secret": client_secret,
    "grant_type": "client_credentials"
  })
  .end(function (res) { 
    
    console.log(res.raw_body);

    
    process.env.ACCESS_TOKEN = res.body.access_token;
    
    console.log(process.env.ACCESS_TOKEN);
    

    
  });
}
  const access_token = process.env['ACCESS_TOKEN']
console.log(access_token);




  // "client_id": "F2mqt58NrLze7Q1CRyZICwXOYCq-zVMYq0yLVAUq7_I",
  // "client_secret": "S4dOBNEIQjGr_TsqqOkYUkhX6WpjQJSbEtfFEFLGwNg",




const app = express();
app.use(cors({credentials: true, origin: true}));

app.get('/api', (request, response) => {
    console.log('hello');
    //console.log(JSON.stringify(request.query.date));
    
    const day_after = request.query.day_after;
    const day_before = request.query.day_before;
    console.log(request.query);
    
    //let d =  date.toISOString()  ; 
    let ph = null;
    var req = unirest('POST', apiUrl);
    // req.query({
    //     "day": date
    // });
    
     req.headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer '+ access_token,
    'Host': 'api.producthunt.com'
  })
  .send({
    "query": `query { posts( postedBefore: "${day_before}", postedAfter: "${day_after}") { edges { node { name, description, website, reviewsRating, tagline, 
      thumbnail {url (height: 80, width: 80)}, votesCount, createdAt, topics(first:13) {edges {node {name}}} } } }  }`
  })
  .end(function (res) { 
    
    if (res.error) throw new Error(res.error); 
    ph = res.body;
    response.send(ph);
    

  });
    
  

});


app.listen(port, '127.0.0.1', function(){
    console.log('Server now listening on '+port)
})