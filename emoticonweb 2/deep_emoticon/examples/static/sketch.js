
var vocab,word;
var maximum_length=30;
var inp;
var cuteemo=['U・ᴥ・U','▼・ᴥ・▼',' ▼(´ᴥ`)▼ ','U ´ᴥ` U',' U・ᴥ・U ','U・ﻌ・U','(U・x・U)', '(ﾐචᆽචﾐ)',' (=චᆽච=) ','(₌චᆽච₌)',' (≈චᆽච≈)',' (◍චᆽච◍) ','(๑චᆽච๑)',' ฅ(=චᆽච=ฅ)',' (ﾐටᆽටﾐ)',' (=ච㉨ච=) ','(=ච ω ච=)',' (=ච ﻌ ච=)',' (=ච⊱ච=) ','(=චᆽච=) ','(=මᆽම=) ','(=ඒᆽඒ=)',' (=ඔᆽඔ=)',' (=ලᆽල=)',' (=◕ᆽ◕ฺ=) ','(=ʘᆽʘ=)',' (=⊝ᆽ⊝=)',' (ﾐㅇᆽㅇﾐ)',' (=ㅇᆽㅇ=)',' (₌ㅇᆽㅇ₌) ','(≈ㅇᆽㅇ≈)♡ ','(=✖ᆽ✖=)',' (=✪ᆽ✪=)',' (ﾐㅇ ༝ ㅇﾐ)',' (=ㅇ༝ㅇ=) ','(=🝦 ༝ 🝦=)'];
var notOn=false;
var emoticon_list=["థ౪థ)","(￣ヘ￣)","(╯︿╰)","(╥﹏╥)","(♡‿♡)","(╯_╰)","(￣▽￣)/","(*^ｖ^*)","❤","( ͡° ͜ʖ ͡°)","(^u^)","♪(^∇^*)","(⊙ˍ⊙)","(๑•̀ㅂ•́)و✧","(-_-)zzz","(╯‿╰)","(^‿^)","＼(￣▽￣)／","(*˘︶˘*).｡.:*♡"," (-_-)","(⌒_⌒;)","＼(^o^)／","(°_°)","(๑ơ ₃ ơ)♥","♥"," (°-°)","(*•̀ᴗ•́*)و ̑̑","(︶︹︺)","(⊃∀⊂ )","(＞﹏＜)","(^_^)v","(⁍̴̀‿⁍̴́)","(╯°□°)╯︵ ┻━┻","(๑•̀ㅂ•́)و✧","(╥_╥)","(=_=)","(ˆ ڡ ˆ)","(ꐦ°᷄д°᷅)","(ノ*°▽°*)"," (*´﹃｀*)","└(￣ ￣└)(┘￣ ￣)┘","⊙ω⊙ ","︻┻┳══━一","(,,꒪꒫꒪,,)","( ‵▽′)ψ","(-_-;)","( ´•̥×•̥` )","♡ ","((d[-_-]b))","(￣y_￣)","(^_-)","(XωX)","( ﾟдﾟ)","(^○^)","(･ω<)☆"," (*￣︿￣)","(> ﹏ <)","ᕙ(•̀_•́)ᕗ","(ง •̀_•́)ง","♥","｡:.ﾟ♥.:｡","♥","(￣┰￣*)"," *★,°*:.☆(￣▽￣)/$:*.°★* 。"];
var prep='';
function co(){
  sentence=inp.value();
  prep='Finding the emoticon ' +cuteemo[floor(random(cuteemo.length))];
  preparing=true;
  jQuery('#emo').focus().click();
}
var size;
var moveX=0;
var moveY=0;
var geoLocLat;
var geoLocLon;
var distance;
var debug = false;
var windDegree=0;
var windSpeed=0;
var flowfield;
var text;
var wid=600;
var hei=500;
var newemo;




  


function Emo() {
  
  this.position = createVector(wid/2,hei*0.2);
  this.v0 = createVector(random(-20,20),random(-20,20));
  this.velocity = createVector(random(-5,5),random(-5,5));
  this.hue=random(0,360);
  this.light=random(70,100);
  this.color=color(this.hue%360,100,this.light);
  this.maxspeed=20;
  this.r=60;
  this.sentence=sentences[sentences.length-1];
  this.emoticon=emoticon;
  this.xoff=random(-10,10);
  this.yoff=random(-10,10);
  this.accompany=[];
  this.acctext=[];



  

  this.run = function() {
  
    this.update();
    this.borders();
    this.display();
  };


    // Method to update location
  this.update = function() {
    // this.xoff+=0.5;
    // this.yoff+=0.5;
    // //this.velocity=this.v0;
    // this.velocity.x*=noise(this.xoff);
    // this.velocity.y*=noise(this.yoff);
    this.velocity.x += random(-3, 3);
      this.velocity.y += random(-3, 3);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    this.hue+=10;
    this.color=color(this.hue%360,100,this.light);
    for (let i = 0; i < this.accompany.length; i++) {
      this.accompany[i].x += random(-2, 2);
      this.accompany[i].y += random(-2, 2);

    }

    let acct=String.fromCharCode(random((0x0021, 0x0FD9)));
    accposition=this.position;
    accposition.x+=random(-10, 10);
    accposition.y+=random(-10, 10);
    this.accompany.push(createVector(this.position.x-20,this.position.y-20)); 

 
    this.acctext.push(acct);
    if (this.accompany.length > 10) {
      this.accompany.splice(0, 1);
      this.acctext.splice(0, 1);
    }
  };

 
  
  

  
 
  this.borders = function() {
    if (this.position.x < -this.r)  this.position.x=this.r+width;
    if (this.position.y < -this.r)  this.position.y=this.r+height;
    if (this.position.x > width+this.r)  this.position.x=-this.r;
    if (this.position.y > height+this.r) this.position.y=-this.r;
  };

  this.display = function() {
    textAlign(CENTER);
    
    noStroke(); 
    push();

  
    for (let i = 0; i < this.accompany.length; i++) {
      let pos = this.accompany[i];
   
     fill(random(360),random(50,100),random(50,100));
     textSize(i*2);
     text(this.acctext[i],pos.x, pos.y);
    }
    textSize(30);
    fill(this.color);
    if(dist(mouseX,mouseY,this.position.x,this.position.y)<this.r){
    textSize(50);

  }
    text(this.emoticon,this.position.x,this.position.y);
    
    pop(); 
  };
  
  this.mouseHover=function (){
    if(dist(mouseX,mouseY,this.position.x,this.position.y)<60){
      cursor(HAND);
      notOn=false;
      this.position.sub(this.velocity);
      textSize(20);
      text(this.sentence,this.position.x,this.position.y-50);   

    }};
  this.clicked=function(){
  };
}



function setup() {



  //add sample emo
  sentences.push('share some ideas about you');
  emoticon='(^_-)';
  emoticons.push(new Emo());
  sentences.push('How are you?');
  emoticon='(^_^)';
  emoticons.push(new Emo());
  sentences.push('I am super happy today!');
  emoticon='(^o^)';
  emoticons.push(new Emo());
  sentences.push('I like music');
  emoticon='((d[-_-]b))';
  emoticons.push(new Emo());
  
   noCursor();

  frameRate(10);
  wid=windowWidth;
  hei=windowHeight;
  colorMode(HSL);
  var cvs = createCanvas(windowWidth, windowHeight);
  cvs.parent('canvas');
  cvs.id('myCanvas');
  inp = createInput('');
  inp.style('font-size', '20px');
  inp.id('input');
  inp.position(width*0.2,height*0.85);
  inp.size(width*0.6,height*0.05);
  button = createButton('Emoticon it!');
  button.id('emo');
  button.position(inp.x+inp.width*1.1,inp.y+inp.height/4);
  button.mousePressed(co);
 textAlign(CENTER);
}
var i=0
var title=true;

function draw() {
  if(notOn){cursor(ARROW);}
  notOn=true;
  background(0);
  if(title){
  textSize(50);
  fill(255);
  text('Emoting Your Feeling',width/2,height*0.2);
}
  textSize(20);
  fill(255);
  textAlign(CENTER);
  if(emoticons.lenth>=20){
      emoticons.splice(0,1);
    }
 prep='Finding the emoticon ' +cuteemo[floor(random(cuteemo.length))];
  for (var i =  emoticons.length-1; i >=0; i--) {
    emoticons[i].mouseHover();
    emoticons[i].run();
    
  }
  if (preparing){
  title=false;
  fill(0,0,100);
  textSize(40);
  text(prep,width/2,height*0.2);


    
}

if(notOn){
  noCursor();
  fill(0,0,100);
  textSize(30);
  //ellipse(mouseX,mouseY,100);
  let acctext=String.fromCharCode(random(0x0021, 0x0FD9));
  console.log(acctext)
  text(acctext,mouseX,mouseY);
}
}




// var a=String.fromCharCode(random((0x0021, 0x0FD9)));
// console.log(a);

