var app = new Framework7 ({
    
    root: '#app', /* THIS IS THE APP ELEMENT */
    
    routes: [
        {
            path: '/home/',
            url: 'index.html',
        },
        {
            path: '/sceneSelect/',
             url:'./pages/sceneSelect.html',
        },
        {
            path: '/scene1/',
             url:'./pages/scene1.html',
        },
        {
            path: '/scene2/',
             url:'./pages/scene2.html',
        },
        {
            path: '/scene3/',
             url:'./pages/scene3.html',
        },
        {
            path: '/scene4/',
             url:'./pages/scene4.html',
        },
        {
            path: '/scene5/',
             url:'./pages/scene5.html',
        }
    ]
    
})

var mainView = app.views.create('.view-main');


function myFunction1() {
  var mailbox = document.getElementById("mailbox");
   mailbox.innerHTML = "There are bills, nothing else. Just bills.";
} ;
function myFunction2() {
    var walkaway = document.getElementById("walkaway");
   walkaway.innerHTML = "Okay, well I guess you did that. Cool.";
};

function myFunction3() {
    var make = document.getElementById("make");
   make.innerHTML = "Are you comfy now? Relaxed? Now go towards the strange light already.";
};
function myFunction4() {
    var leave = document.getElementById("leave");
   leave.innerHTML = "This is not where the story goes";
};

function myFunction5() {
  var sit = document.getElementById("sit");
   sit.innerHTML = "Okay, now what?";
} ;
function myFunction6() {
    var leave2 = document.getElementById("leave2");
   leave2.innerHTML = "But the chair looks really comfy...";
};

function myFunction7() {
    var turn = document.getElementById("turn");
   turn.innerHTML = "Probably a good choice, but the wrong one for the story.";
};
function myFunction8() {
    var look = document.getElementById("look");
   look.innerHTML = "I said there is nothing installed on the computer except Brackets.. Take the hint.";
};

working = "Everything seems to be working..";

console.log(working);