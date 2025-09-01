export function LeftAbout()
{
    const left=document.createElement("div");
    left.className="left";
    let img=document.createElement("img");
    img.src="img/imgabout.png";
    left.appendChild(img);
    return left;
}