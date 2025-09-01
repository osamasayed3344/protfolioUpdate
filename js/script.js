const namepersonal=document.querySelector(".backgroundimg .left h1");
const text=["Osama Sayed","full stack developer"];
let index=0; 
let i=0;

function typewrite(element,text,i){
    if(index<text.length){
        element.innerHTML=text[index].substring(0,i);

        if(i==text[index].length){
            i=0;
            index++;
        } 

        setTimeout(function(){
            typewrite(element,text,i+1);
        },200);
    }
    else{
        i=0;
        index=0;
        typewrite(namepersonal,text,i);
    }
}


typewrite(namepersonal,text,i);



/*--------------------------------------------*/

const btndemo1=document.getElementById("btndemo1");

btndemo1.onclick=function(){
    window.open("https://osamasayed3344.github.io/E-Commerce1/");
}

const btndemo2=document.getElementById("btndemo2");

btndemo2.onclick=function(){
    window.open("https://osamasayed3344.github.io/calculator/");
}

const btndemo3=document.getElementById("btndemo3");

btndemo3.onclick=function(){
    window.open("https://osamasayed3344.github.io/XOgame/");
}

const btndemo4=document.getElementById("btndemo4");

btndemo4.onclick=function(){
    window.open("https://osamasayed3344.github.io/profiledoctor/");
}

const btndemo5=document.getElementById("btndemo5");

btndemo5.onclick=function(){
    window.open("https://osamasayed3344.github.io/fristporject/");
}
/*---------------------------------------------------------------*/

const menubtn=document.getElementById("menubtn");
const closebtn=document.getElementById("closebtn");

menubtn.onclick=function(){
    closebtn.style.display="block";
    menubtn.style.display="none";
    document.querySelector("header .right").style.display="block";
}

closebtn.onclick=function(){
    closebtn.style.display="none";
    menubtn.style.display="block";
    document.querySelector("header .right").style.display="none";
}

/*---------------------------------------------------------------------*/
const contactbtn=document.getElementById("contactbtn");
contactbtn.onclick=function(){
    window.open("https://osamasayed3344.github.io/personalwebsite/#contact");
}