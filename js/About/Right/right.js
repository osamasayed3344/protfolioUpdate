export function RightAbout()
{
    const right=document.createElement("div");
    right.className="right";
    let head=document.createElement("h1");
    head.className="headAbout";
    head.innerHTML="About Us";
    let arrparph=["My Name is Osama Sayed.","I'm 25 years old.","I graduated from faculty of Computer Science and Information department Information System University in Minya."]
    .map(value=>{
        let parph=document.createElement("p");
        parph.textContent=value;
        return parph;
    });
    let body=document.createElement("div");
    body.className="bodyAbout";
    body.append(...arrparph);
    right.append(head,body);
    return right;
}