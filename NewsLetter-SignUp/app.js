const express=require("express");
const bodyParser=require('body-parser');
const request = require('request');
const https = require('https');
const app=express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
  res.sendFile(__dirname + "/signup.html");
});

app.post('/',function(req,res){
const fname=req.body.fname;
const lname=req.body.lname;
const email=req.body.email;

const data={
  members:[
    {
      email_address:email,
      status:"subscribed",
      merge_fields:{
        FNAME:fname,
        LNAME:lname
      }
    }
  ]
};

const jsonData=JSON.stringify(data);

const url="https://us1.api.mailchimp.com/3.0/lists/9fa3b46a63";

const options={
  method:"POST",
  auth:"sarthak1:8f6ff8d87fbf2175df64faf05ec5b1a8-us1"
}

const request=https.request(url,options,function(response){

 if(response.status===200){
   res.sendFile(__dirname + "/success.html");
 }
 else{
   res.sendFile(__dirname + "/failure.html");
 }

  response.on("data",function(data){
    console.log(JSON.parse(data));
  });
});

request.write(jsonData);
request.end();

});


app.post("/failure",function(req,res){
  res.redirect('/');
});

app.listen(3000,function(){
  console.log("server running on port 3000");
});
// API key
// 8f6ff8d87fbf2175df64faf05ec5b1a8-us1

// List Id
// 9fa3b46a63
