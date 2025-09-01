export function RightHeader()
{
    let right=document.createElement("div");
    right.className="right";
    let navs=[
        {text:"Home",href:"/"},
        {text:"About",href:"#about"},
        {text:"Skills",href:"#skills"},
        {text:"Project",href:"#project"},
        {text:"Contact",href:"#contact"}
    ].map((text)=>{
        let nav=document.createElement("a");
        nav.innerHTML=text.text;
        nav.href=text.href;
        return nav;
    });
    right.append(...navs);
    return right;
}