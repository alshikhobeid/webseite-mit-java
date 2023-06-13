

const colorLi = document.querySelectorAll('.colors-list li');

// Prüfung LocalStorage für Farben auswählen
let mainColor = localStorage.getItem("color-option");

if (mainColor !== null){
   
    document.querySelector('header').style.backgroundColor = mainColor;
    document.querySelector('.main h2 span').style.color = mainColor;
    document.querySelector('.main-btn').style.backgroundColor = mainColor;

// remove active class
colorLi.forEach(function(element){
    element.classList.remove('active');

// add active class to Element
if (element.dataset.color === mainColor){
    element.classList.add('active');
}

});

};


// Prüfung LocalStorage für Random

const randomBackBtn = document.querySelectorAll('.random-background span');
let backgroundOption = true;
let backgroundInterval ;

let backgroundLocalItem = localStorage.getItem('background-option');

if(backgroundLocalItem !== null){

    if(backgroundLocalItem === 'true'){
        backgroundOption = true;

    } else {
        backgroundOption = false;
    }

    randomBackBtn.forEach(function(element){
        element.classList.remove('active');

    });

    if(backgroundLocalItem === 'true'){
        document.querySelector('.ja').classList.add('active');

    } else {
        document.querySelector('.nein').classList.add('active');

    }
};








// Click toggel Setting Box
document.querySelector(".toggle-setting").onclick = function(){

document.querySelector(".setting-box").classList.toggle('open');

};







// Farben auswählen

for(i =0 ; i < colorLi.length; i++){
    colorLi[i].onclick = function hi(e){ 
    document.querySelector('header').style.backgroundColor = e.target.dataset.color;
    document.querySelector('.main h2 span').style.color = e.target.dataset.color;
    document.querySelector('.main-btn').style.backgroundColor = e.target.dataset.color;

    // set die Farben in LocalStorage
    localStorage.setItem("color-option", e.target.dataset.color);

    //remove active class
    colorLi.forEach(function(element){
        element.classList.remove('active');
    });
    
// e.target.parentElement.querySelectorAll('.active').forEach(function(element) {
    //     element.classList.remove('active');
    // });


    //add active zu diese Element
    e.target.classList.add('active');
    
 };
};







// Random Background option

for(i =0 ; i < randomBackBtn.length; i++){
    randomBackBtn[i].onclick = function(e){ 
   
    //remove active class
    randomBackBtn.forEach(function(element){
        element.classList.remove('active');
    });

    //add active zu diese Element
    e.target.classList.add('active');

    //condition (Ja:function Run , Nein:Function clear)

    if(e.target.dataset.background === 'ja'){
        backgroundOption = true;
        randomImg();
        localStorage.setItem('background-option', true);

    } else {
        backgroundOption = false;
    clearInterval(backgroundInterval);
    localStorage.setItem('background-option', false);

    }
    
 };
};



// Random Number für img

let myBackground = document.querySelector('.main');
let imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];


//Function für Random Img 

function randomImg(){

    if(backgroundOption === true){

        backgroundInterval = setInterval(function(){
            let randomNumber = Math.floor(Math.random() * imgArray.length);
            
            myBackground.style.backgroundImage = 'url("img/' + imgArray[randomNumber] + '")'
            },1000);
            
    }
}

randomImg();












//project Card-Webdesign - JSON mit AJAX


let projectWebdesignDiv = document.querySelector('.projects .content .project-card:nth-child(4)');
let moreDetailProjectWeb = document.querySelector('.projects .content .project-card:nth-child(4) .project-info .project-title a');


moreDetailProjectWeb.addEventListener("click", function(){
    let xhr = new XMLHttpRequest();

    xhr.onload = function() {                                    // function onload
        if (xhr.status != 200) {
            projectWebdesignDiv.textContent = "ein Fehler";
            return;
        };

        let jsonData;
        if (xhr.responseType == "json") jsonData = xhr.response;
        else jsonData = JSON.parse(xhr.responseText);

        addHtml(jsonData);

    };
  
  xhr.open('GET', 'js/project_webdesign.json');
  xhr.responseType = 'json';
  xhr.send();

});



function addHtml(data){                             // function add zu HTML
    let htmlText = "";

    for(i =0 ; i < data.length; i++){
        htmlText +=  "<b class='font_color'>" + data[i].name + ": </b><br>" + "<span class='font_size'>" + data[i].inhalt + "</span>" +"<br>" + "<b class='font_color'>Datum:</b>" + "<br><span class='font_size'>";

        for(j =0; j < data[i].datum.length; j++){
            htmlText +=  data[i].datum[j];
            htmlText += " <br> ";
        };
        
        if(i === data.length-1 ) break;
        htmlText += '</span>' + "<hr>";
    };

    projectWebdesignDiv.innerHTML = "";
    projectWebdesignDiv.insertAdjacentHTML('afterbegin',htmlText);

}





