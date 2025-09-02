export function Skills()
{
    const skills=document.getElementById("skills");
    let head=document.createElement("h1");
    head.className="headSkills";
    head.innerHTML="My Skills";
    let body=document.createElement("div");
    body.className="bodySkills";
    let arrskills=[
        {icon:"img/skills/html-5.png",name:"Html"},
        {icon:"img/skills/css-3.png",name:"Css"},
        {icon:"img/skills/java-script.png",name:"JavaScript"},
        {icon:"img/skills/bootstrap.png",name:"Bootstrap"},
        {icon:"img/skills/c-.png",name:"C++"},
        {icon:"img/skills/react.png",name:"React"}
    ].forEach(value=>{
        let img=document.createElement("img");
        img.src=value.icon;
        let name=document.createElement("p");
        name.innerHTML=value.name;
        body.append(img,name);
    });
    skills.append(head,body);
}