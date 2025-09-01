import { LeftHeader } from "./Left/left.js";
import { MenuBtn } from "./Right/menubtn.js";
import { RightHeader } from "./Right/right.js";


export function Header(){
    let header =document.querySelector("header");
    const midiaQuery=window.matchMedia('(max-width:1024px)');

    header.appendChild(LeftHeader());
    
    handleMediaQuery(midiaQuery,header);
    midiaQuery.addEventListener("change",(event)=>handleMediaQuery(event,header));
}

function handleMediaQuery(event,header)
{
    const rightHeader = header.querySelector(".right");
    if(rightHeader)
    {
        rightHeader.remove();
    }

    if(event.matches)
    {
        //small device
        header.appendChild(MenuBtn());
    } 
    else
    {
        header.appendChild(RightHeader());
        if(document.querySelector("aside"))
        {
            document.querySelector("aside").remove(); 
        }
    }   
}
