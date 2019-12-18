const puppeteer = require("puppeteer");
const request = require('request');
var http=require('http');
var express=require('express');
var bodyparser=require('body-parser');
var MongoClient=require('mongodb').MongoClient;
var urlencoded=bodyparser.urlencoded({extended:true});

var app=express();
app.set('view engine', 'ejs');
app.set("views",__dirname);

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

var port = process.env.PORT || 3000;

app.get('/',function(req,res){
    res.sendFile(__dirname+'/'+'scrapemain.html');
})

app.get('/about',function(req,res){
    res.sendFile(__dirname+'/'+'about.html');
})

app.post('/find',urlencoded,function(req,res){
  var place=req.body.location;
 var arr=[];
(async () => {
    const browser = await puppeteer.launch({
        args: [
        '--no-sandbox',
         '--disable-setuid-sandbox',
         '--disable-gpu',
         '--disable-dev-shm-usage',
         '--proxy-server="direct://"',
         '--proxy-bypass-list=*'
        ],
        });
    var page = await browser.newPage();
     await page.setViewport({ width: 1366, height: 768});
    await page.goto(`https://paytm.com/movies/`.concat(place),{waitUntil: 'load', timeout: 0});  
    const textspaytm = await page.$$eval('._3Sve',divs => divs.map(({ innerText }) => innerText));
    await page.goto('https://in.bookmyshow.com/'.concat(place,'/movies'),{waitUntil: 'load', timeout: 0});
    const textsbook = await page.$$eval('.card-title',divs => divs.map(({ innerText }) => innerText));
    arr =textspaytm.concat(textsbook);
    for(var i=0; i<arr.length; ++i) {
        for(var j=i+1; j<arr.length; ++j) {
            if(arr[i] === arr[j])
                  arr.splice(j--, 1);
        }
    }
      debugger;
      arr.pop();
      await browser.close();
     res.render('scraperesult',{movies:arr,place:place});
})();
})


app.listen(port);