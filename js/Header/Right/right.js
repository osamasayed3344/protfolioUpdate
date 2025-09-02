export function RightHeader()
{
    let right=document.createElement("div");
    right.className="right";
    let navs=[
        {id:"homenav",text:"Home",href:"#"},
        {id:"aboutnav",text:"About",href:"#about"},
        {id:"skillsnav",text:"Skills",href:"#skills"},
        {id:"projectsnav",text:"Projects",href:"#projects"},
        {id:"contactnav",text:"Contact",href:"#contact"}
    ].map((text)=>{
        let nav=document.createElement("a");
        nav.id=text.id;
        nav.innerHTML=text.text;
        nav.href=text.href;
        return nav;
    });
    right.append(...navs);
    return right;
}