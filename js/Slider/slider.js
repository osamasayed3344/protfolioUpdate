import { LeftSlider } from "./Left/left.js";
import { RightSlider } from "./Right/right.js";

export function Slider()
{
    const slider=document.getElementById("slider");
    slider.append(LeftSlider(),RightSlider());
}