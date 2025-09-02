export function Projects()
{
    const projects=document.getElementById("projects");
    let head=document.createElement("h1");
    head.className="headProjects";
    head.innerHTML="Projects";
    let body=document.createElement("div");
    body.className="bodyProjects";
    let arrprojects=[
        {id:"img1",name:"E-Commence",icon:"img/projects/Annotation 2024-03-10 145121.jpg",link:"https://osamasayed3344.github.io/E-Commerce1/"},
        {id:"img2",name:"Clock",icon:"img/projects/clock.jpg",link:"https://osamasayed3344.github.io/clock/"},
        {id:"img3",name:"XO Game",icon:"img/projects/xo_game.png",link:"https://osamasayed3344.github.io/XOgame/"},
        {id:"img4",name:"PrayerTimes",icon:"img/projects/prayertimes.png",link:"https://osamasayed3344.github.io/PrayerTimes/"},
        {id:"img5",name:"Clinic management",icon:"img/projects/clinic.png",link:"https://osamasayed3344.github.io/cliniclandingpage/"},
    ].map(project=>{
        let container=document.createElement("div");
        container.className="containerIcon";
        container.id=project.id;
        let img=document.createElement("img");
        img.src=project.icon;
        let p=document.createElement("p");
        p.innerHTML=project.name;
        container.ontouchmove=function(){
            p.style.transition="all 2s";
            p.style.opacity=1;
            p.style.top="50%";
        };
        container.onmouseout=function(){
            p.style.transition="all 2s";
            p.style.opacity=0;
            p.style.top="100%";
        };
        container.append(img,p);
        return container;
    });
    body.append(...arrprojects);
    projects.append(head,body);
}
