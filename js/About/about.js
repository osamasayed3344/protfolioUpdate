import { LeftAbout } from "./Left/left.js";
import { RightAbout } from "./Right/right.js";

export function About()
{
    const about=document.getElementById("about");
    about.append(LeftAbout(),RightAbout());
}