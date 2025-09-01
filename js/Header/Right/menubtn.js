import { RightHeader } from "./right.js";

export function MenuBtn()
{
    let right=document.createElement("div");
    right.className="right";
    let btn=document.createElement("button");
    btn.innerHTML="<i class='fa-solid fa-bars'></i>";
    btn.onclick=function(){
        if(!document.querySelector("aside"))
        {
            let p=document.createElement("aside");
            p.className="navbarslider";
            p.style.top=document.querySelector("header").offsetHeight+"px";
            p.appendChild(RightHeader());
            document.querySelector("header").after(p);
            btn.innerHTML="<i class='fa-solid fa-x'></i>";
            document.querySelector("aside").style.animation="myslider 0.3s ease-out";
        }
        else
        {
            btn.innerHTML="<i class='fa-solid fa-bars'></i>";
            document.querySelector("aside").remove(); 
        }
    }
    right.appendChild(btn);
    return right;
}