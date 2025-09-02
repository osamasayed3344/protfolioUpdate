export function Footer()
{
    let footer =document.querySelector("footer");
    let p=document.createElement("p");
    p.innerHTML="&copy; 2025 All rights reserved by Osama Sayed";
    footer.appendChild(p);
}