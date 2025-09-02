export function RightSlider()
{
    const right=document.createElement("div");
    right.className="right";
    let img=document.createElement("img");
    img.src="img/11zon_cropped.png";
    right.append(img);
    return right;
}