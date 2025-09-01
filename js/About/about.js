import { LeftAbout } from "./Left/left.js";
import { RightAbout } from "./Right/right.js";

export function About()
{
    const about=document.getElementById("about");
    /*let head=document.createElement("h2");
    head.innerHTML="About";*/
    /*let container=document.createElement("div");
    container.className="containerAbout";
    container.append(LeftAbout(),RightAbout());*/
    about.append(LeftAbout(),RightAbout());
}