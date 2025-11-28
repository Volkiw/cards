console.log("accordion funciona");const q=document.querySelectorAll(".accordion__header"),H=document.querySelectorAll(".accordion__content");q.forEach(e=>{e.addEventListener("click",()=>{const c=e.parentElement.querySelector(".accordion__content");H.forEach(n=>{n!==c&&(n.classList.remove("active"),n.style.maxHeight="0",n.style.paddingTop="0",n.style.paddingBottom="0")}),c.classList.toggle("active"),c.classList.contains("active")?(c.style.maxHeight=c.scrollHeight+"px",c.style.paddingTop="10px",c.style.paddingBottom="10px"):(c.style.maxHeight="0",c.style.paddingTop="0",c.style.paddingBottom="0")})});const T=document.querySelector(".js_checkbox-element"),m=document.querySelectorAll(".js_background-img"),i=document.querySelector(".js_input-level");let j=document.querySelectorAll(".js_input");const g=document.querySelector(".js_card-elements"),E=document.querySelector(".js_card-level");let r=document.querySelector(".js_card");const M=document.querySelector(".js_button");let s=[];const f=document.querySelector(".js_card-name"),_=document.querySelector(".js_card-family"),p=document.querySelector(".js_card-description"),v=document.querySelector(".js_card-skill"),L=document.querySelector(".js_card-origin"),y=document.querySelector(".js_card-weapon"),S=document.querySelector(".js_card-level"),h=document.querySelector(".js_profile-image"),u=document.querySelector(".js_rendered-cards"),d=document.querySelector(".js_bt-delete");function k(){localStorage.getItem("cards")!==null&&(s=JSON.parse(localStorage.getItem("cards")),o(),d.classList.remove("hidden"))}function I(e){let t=e.target.value,n=`.js_card-${e.currentTarget.id}`,l=document.querySelector(n);l.innerHTML=t}function C(){j.forEach(e=>{e.addEventListener("input",I)})}function $(e){e.preventDefault();let t=parseInt(i.value);t>100||t<1?(i.value="",i.placeholder="<100"):E.innerHTML=t}function x(e){let t=e.target,n=`.js_element-${t.value}`,l=document.querySelector(n);t.checked===!0?l.classList.remove("hidden"):l.classList.add("hidden")}function B(e){let t=e.target,c=`input-${t.id}`,n=`form-background__img--${t.id}`,l=document.getElementById(c);l.checked===!1?(m.forEach(b=>{b.classList.remove("form-background__img--selected")}),r.classList.remove("form-background__img--bg-1"),r.classList.remove("form-background__img--bg-2"),r.classList.remove("form-background__img--bg-3"),r.classList.remove("form-background__img--bg-4"),l.checked,t.classList.add("form-background__img--selected"),r.classList.add(n)):l.checked===!1&&t.classList.remove("form-background__img--selected")}function A(){m.forEach(e=>{e.addEventListener("click",B)})}function w(){let e={field1:parseInt(S.innerHTML),field2:f.innerHTML,field3:_.innerHTML,field4:p.innerHTML,field5:v.innerHTML,field6:L.innerHTML,field7:y.innerHTML,photo:h.style.backgroundImage,background:r.classList.value,elements:g.innerHTML};s.push(e),console.log(e.background),localStorage.setItem("cards",JSON.stringify(s)),k(),J()}C();A();k();i.addEventListener("input",$);M.addEventListener("click",w);T.addEventListener("change",x);const a=new FileReader,D=document.querySelector(".js_profile-upload-btn"),F=document.querySelector(".js_profile-image");function N(e){const t=e.currentTarget.files[0];a.addEventListener("load",V),a.readAsDataURL(t)}function V(){F.style.backgroundImage=`url(${a.result})`}D.addEventListener("change",N);function J(){for(let e of s)S.innerHTML=e.field1,f.innerHTML=e.field2,_.innerHTML=e.field3,p.innerHTML=e.field4,v.innerHTML=e.field5,L.innerHTML=e.field6,y.innerHTML=e.field7,h.style.backgroundImage=e.photo,r.classList.value=e.background,g.innerHTML=e.elements;o()}function o(){console.log("render cards funciona"),u.innerHTML=" ";let e=" ";for(let t of s)e+=`
        <li class="section-cards__li">
        <div class="render-card ${t.background}">
        <div class="card__top">
        <div class="card-title">
            <p class="card-title__name">${t.field2}</p>
            <div class="elements">
            ${t.elements}
            </div>
        </div>
        <div class="card-image" style='background-image: ${t.photo}'></div>
        <div class="card-type">
            <p class="card-type__family">Criatura: ${t.field3}</p>
            <p class="card-type__level">Nivel ${t.field1}</p>
        </div>
        </div>
        <div class="card__bottom">
        <div class="card-desc">
            <p class="card-desc__text">${t.field4}</p>
            <div class="card-desc__info">
            <div class="info">
                <img class="info__img" src="./images/skill.png"/>
                <p class="info__text">${t.field5}</p>
            </div>
            <div class="info">
                <img class="info__img" src="./images/origin.png"/>
                <p class="info__text">${t.field6}</p>
            </div>
            <div class="info">
                <img class="info__img" src="./images/weapon.png"/>
                <p class="info__text">${t.field7}</p>
            </div>
            </div>
        </div> 
        </div>
        </li>
        `;u.innerHTML=e}function O(e){e.preventDefault(),localStorage.removeItem("cards"),s=[],o(),d.classList.add("hidden")}d.addEventListener("click",O);console.log("main funciona");
//# sourceMappingURL=main.js.map
