import { About } from "./About/about.js";
import { Footer } from "./Footer/footer.js";
import { Header } from "./Header/header.js";
import { Projects } from "./Projects/projects.js";
import { Skills } from "./Skills/skills.js";
import { Slider } from "./Slider/slider.js";

window.addEventListener("DOMContentLoaded",function(){
    Header();
    Slider();
    About();
    Skills();
    Projects();
    Footer();
});