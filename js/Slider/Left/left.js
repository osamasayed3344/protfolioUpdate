
export function LeftSlider()
{
    const left=document.createElement("div");
    left.className="left";
    let arrhead=["Hi,","I'm ","Web Developer"].map(value=>{
        let h=document.createElement("h1");
        h.className="display-5";
        h.innerHTML=value;
        if(value==="I'm ")
        {
            h.id="displayname";
            let span=document.createElement("span");
            span.innerHTML="Osama Sayed";
            h.appendChild(span);
        }
        return h;
    });
    //---------ahref-------------
    const btns=document.createElement("div");
    btns.className="contactUsBtn";
    let arrHrefs=[
        {innertext:"CV Download",href:"img/your resume (osama sayed).pdf"},
        {innertext:"Contact Us", href:"#contact"}
    ].map(value=>{
        let ahref=document.createElement("a");
        ahref.className="btn btn-primary";
        ahref.href=value.href;
        ahref.textContent=value.innertext;
        return ahref;
    });
    btns.append(...arrHrefs);
    //---------social--------------
    let social=document.createElement("div");
    social.className="socialMedia";
    let arrIcons=[
        {href:"https://www.facebook.com/profile.php?id=61556249710322",icon:"<i class='fa-brands fa-facebook'></i>"},
        {href:"https://www.youtube.com/channel/UCyW3QOgU5r285Csqr0z5Njg",icon:"<i class='fa-brands fa-github'></i>"},
        {href:"https://www.linkedin.com/in/%D8%A7%D8%B3%D8%A7%D9%85%D8%A9-%D8%B3%D9%8A%D8%AF-b1932b276/",icon:"<i class='fa-brands fa-linkedin'></i>"}
    ].map(value=>{
        let a=document.createElement("a");
        a.href=value.href;
        a.innerHTML=value.icon;
        return a;
    });
    social.append(...arrIcons);
    left.append(...arrhead,btns,social);
    return left;
}