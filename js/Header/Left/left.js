
export function LeftHeader()
{
    let left=document.createElement("div");
    left.className="left";
    let brand=document.createElement("h3");
    brand.textContent="Osama Sayed";
    left.appendChild(brand);
    return left;
}