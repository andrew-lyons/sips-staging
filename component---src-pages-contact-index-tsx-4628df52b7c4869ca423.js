"use strict";(self.webpackChunksips_coffee_truck=self.webpackChunksips_coffee_truck||[]).push([[563],{2453:function(e,t,a){var n=a(7294),r=a(1023),l=a(1883);t.Z=e=>{let{href:t,text:a,arrow:c,slash:s=!0}=e;return n.createElement(l.Link,{className:"arrow-cta",to:(s?"/":"")+t},a,c?n.createElement("img",{src:r.Z}):"")}},2266:function(e,t,a){var n=a(7294),r=a(1023);t.Z=e=>{let{headBlock:t,includeName:a=!0,includeEmail:l=!0,includePhone:c=!0,includeDetails:s=!0}=e;const{0:i,1:o}=(0,n.useState)(""),{0:m,1:u}=(0,n.useState)(""),{0:E,1:h}=(0,n.useState)(""),{0:d,1:f}=(0,n.useState)(""),{0:g,1:p}=(0,n.useState)({name:"",phone:"",email:"",details:"",response:""}),{0:v,1:M}=(0,n.useState)(""),N=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return n.createElement("section",{className:"generalcontactform"},n.createElement("form",{action:"submit"},t,a?n.createElement(n.Fragment,null,n.createElement("input",{className:g.name.length?"has-error":"",onChange:e=>o(e.target.value),name:"name",type:"text",placeholder:"Name"}),n.createElement("p",{className:"input-error "+(g.name.length?"input-error-active":"")},g.name)):null,l?n.createElement(n.Fragment,null,n.createElement("input",{className:g.email.length?"has-error":"",onChange:e=>u(e.target.value),name:"email",type:"email",placeholder:"Email"}),n.createElement("p",{className:"input-error "+(g.email.length?"input-error-active":"")},g.email)):null,c?n.createElement(n.Fragment,null,n.createElement("input",{className:g.phone.length?"has-error":"",onChange:e=>h(e.target.value),name:"phone",type:"tel",placeholder:"Phone #"}),n.createElement("p",{className:"input-error "+(g.phone.length?"input-error-active":"")},g.phone)):null,s?n.createElement(n.Fragment,null,n.createElement("textarea",{className:g.details.length?"has-error":"",onChange:e=>f(e.target.value),name:"details",placeholder:"Details..."}),n.createElement("p",{className:"input-error "+(g.details.length?"input-error-active":"")},g.details)):null,v.length?n.createElement("p",{className:"request-response"},v):null,n.createElement("a",{className:"arrow-cta",onClick:()=>{let e=0;if(a&&(i.length?p((e=>({...e,name:""}))):(p((e=>({...e,name:"Please enter a name."}))),e+=1)),c){String(E).length?p((e=>({...e,phone:""}))):(p((e=>({...e,phone:"Please enter a phone number."}))),e+=1)}if(m.length?m.toLowerCase().match(N)?p((e=>({...e,email:""}))):(p((e=>({...e,email:"Please enter a valid email."}))),e+=1):(p((e=>({...e,email:"Please enter an email."}))),e+=1),d.length?p((e=>({...e,details:""}))):(p((e=>({...e,details:"Please add some context for your inquiry."}))),e+=1),!e){const e={method:"POST",body:JSON.stringify({name:i,email:m,phone:E,details:d}),headers:{"Content-Type":"application/json"}};fetch("https://sips-email-server.vercel.app/api/emails",e).then((e=>e.text())).then((e=>M(e))).catch((e=>p((t=>({...t,response:e})))))}}},"Send",n.createElement("img",{src:r.Z}))))}},2798:function(e,t,a){var n=a(7294);t.Z=e=>{let{image:t,text:a}=e;return n.createElement("section",{className:"heroblock",style:{backgroundImage:"url("+t+")"}},n.createElement("h1",null,a))}},6098:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294);var r=a(9583),l=a(2453),c=a(1883);var s=e=>{let{isOpen:t}=e;return n.createElement("section",{className:"menuoverlay "+(t?"menuoverlay-opened":"")},n.createElement("div",{className:"menuoverlay-content"},n.createElement("div",{className:"routerlinks"},n.createElement(l.Z,{href:"menu",text:"Our Schedule",arrow:!0}),n.createElement(l.Z,{slash:!1,href:"https://orders-sipscoffeetruck.square.site",text:"Order Online",arrow:!0}),n.createElement(l.Z,{href:"about",text:"About Us",arrow:!0}),n.createElement(l.Z,{href:"contact",text:"Contact",arrow:!0})),n.createElement("div",{className:"menuoverlay-content-socials"},n.createElement("h2",null,"Share on Instagram and Facebook"),n.createElement("div",{className:"menuoverlay-content-socials-icons"},n.createElement(c.Link,{to:"https://www.facebook.com/sipscoffeetruck"},n.createElement(r.R9i,null)),n.createElement(c.Link,{to:"https://www.instagram.com/sipscoffeetruck/"},n.createElement(r.Zf_,null))))))},i=a(1870),o=a(8338);var m=e=>{const{0:t,1:a}=(0,n.useState)(!1),{width:l}=function(){const{0:e,1:t}=(0,n.useState)({width:void 0,height:void 0});return(0,n.useEffect)((()=>{function e(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),e}();return n.createElement("div",null,l&&l<1024?n.createElement("nav",null,n.createElement("div",{className:"mainnavsection"},n.createElement(c.Link,{to:"/"},n.createElement("h3",null,"Sips Coffee")),n.createElement("div",{className:"menuicon"},n.createElement("a",{onClick:()=>a((e=>!e))},t?n.createElement(r.aHS,null):n.createElement(r.Fm7,null)))),n.createElement(s,{isOpen:t})):n.createElement("nav",null,n.createElement("div",{className:"navlinks"},n.createElement(c.Link,{to:"/"},"Home"),n.createElement(c.Link,{to:"/menu"},"Menu"),n.createElement(c.Link,{to:"/about"},"About us"),n.createElement(c.Link,{to:"/contact"},"Contact"))),n.createElement("div",{className:"page-content"},n.createElement("div",{className:"sticky-socials"},n.createElement(c.Link,{to:"https://www.facebook.com/sipscoffeetruck"},n.createElement(r.R9i,null)),n.createElement(c.Link,{to:"https://www.instagram.com/sipscoffeetruck/"},n.createElement(r.Zf_,null))),e.children),n.createElement("footer",null,n.createElement("img",{src:i.Z}),n.createElement("div",{className:"footer-linkwrapper"},n.createElement(c.Link,{to:"/menu"},"Schedule Us")),n.createElement("div",{className:"footer-linkwrapper footer-linkwrapper-lastlink"},n.createElement(c.Link,{to:"https://orders-sipscoffeetruck.square.site"},"Order Online")),n.createElement("img",{className:"sticker",src:o.Z}),n.createElement("div",{className:"footer-socials"},n.createElement("div",{className:"footer-socials-icons"},n.createElement("a",null,n.createElement(r.R9i,null)),n.createElement("a",null,n.createElement(r.Zf_,null))))))}},4081:function(e,t,a){a.r(t),a.d(t,{Head:function(){return h},default:function(){return E}});var n=a(7294),r=a.p+"static/midbanner-d57404b7d7297b05f08d6f9ae6edc903.png",l=a.p+"static/contacthero-303cf36a51f4eb649ce72b15a47f71a0.png",c=a(1870),s=a(6098),i=a(2798);var o=e=>{let{title:t,image:a}=e;return n.createElement("section",{className:"midbannerwithcta"},n.createElement("div",{className:"banner",style:{backgroundImage:"url("+a+")"}},n.createElement("div",{className:"banner-inlay"},n.createElement("h3",null,t))))},m=a(2266),u=a(2453);var E=()=>{n.useEffect((()=>{window.scrollTo(0,0)}),[]);const e=n.createElement("div",null,n.createElement("p",null,"Send us a message and we’ll get back with you!"),n.createElement("p",null,"All fields are required."));return n.createElement(s.Z,null,n.createElement("main",{className:"contactpage"},n.createElement(i.Z,{image:l,text:"Get in touch"}),n.createElement("img",{className:"horizontal",src:c.Z}),n.createElement(o,{title:"Fundraisers",image:r}),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus ipsum ut eros suscipit placerat. Ut facilisis, ipsum at vestibulum placerat, justo velit aliquet libero, vel euismod lorem est at neque."),n.createElement(u.Z,{arrow:!0,href:"#",text:"Schedule Us"}),n.createElement(o,{title:"Events",image:r}),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus ipsum ut eros suscipit placerat. Ut facilisis, ipsum at vestibulum placerat, justo velit aliquet libero, vel euismod lorem est at neque."),n.createElement(u.Z,{arrow:!0,href:"#",text:"Get In Touch"}),n.createElement(o,{title:"Other Things...",image:r}),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus ipsum ut eros suscipit placerat. Ut facilisis, ipsum at vestibulum placerat, justo velit aliquet libero, vel euismod lorem est at neque."),n.createElement(u.Z,{arrow:!0,href:"#",text:"Our Schedule"}),n.createElement("img",{className:"sun-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA+CAYAAACcA8N6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA74SURBVHgBxVsLdFTVuf73PmdmEiAJik/k0Vu1Acq1FyK6vMVWZbU2kISHzRsw5qXQJepqr896V65tr3at+mi5askDkCgkmQtiEkRYF0gtd6ltkNoSkIfCNYAiIOZBJpk5Z+/77SEJw8xJ5sxjxY81zJz9+M//78f/2juMRhBZWcVJIpGvJ5I3MWKXSRImk+yk5PKXzXWr36QRhk4jCJmo/ZBIZPh/4x8RI8loLP6rwMOIC89pBME1eblVuZRiHH0DGFHhhSSfVTnj/Av6BhC18AuKHh5bUVERUX9hiPPWFRSx8Or9RUUVCRQDIhY+I/uB6zLzSutMT9eXrQfamzLLy6+w25dz/qVVOfb9cYoAc3NK843e7k/O9LQfzswvzY90Egb5iaRxZm7ZLNK8u6SUuVBXDsWH7JC/tNvf4TMthWdSfkk2saiwdIJGciUUxeXQlxOkkOv+cqD9haKioohXgW3h715cfi00tBvTdGNgOSOxPD277Id2aHR3G6csK5h2lmxAzbDPJ57HSglUkDqEWHHWo/+cIoRt4Z0dIgHChyxxtQJ0Tb6cVVycFI7G9u21as93hTDBpS3hW9uOL5KMzbeoYuAklSKEbeETEjo+g1V+z6oO2+C78jz7Q3p6uiscHSmpO7jM6zP6wvVLLyxMJi5/g58h74DkXhK8hiKEbeHdbreZxPV8/DxqVS+JLXamTEgLR8c0vN7gMsaEDNdP9yW+jK8bQyoYnWecypvcVX+iCBGRwtuwofKMxkQ+RvpkaK3UTZIv/XjJktHD0cB+FcFlOtOH5AOrimXklD0gmVxM/km+CMbgNwj5SOOGmnUUBSI2EW/VrfmLSWw5fp6mUE5nOX2ufwtmMhAO3Rky816P1xyqfVZO2Z1wBJ4fovr3N0+bpJZ72JVjhWjso7xl6oQmxuSjELEztJYezcorzhymf09wgaZb0AEWLllyFTh8Ce8ZFfIaSe90Me23sACCokRUzoF6YdeUSa8jIluJSTYurZWJQrKauQUlk617sxDN7kxM+Mqqpc/rzIeF+WeLqkOayR5rwTakGBC1e9tSUWF0nTpSgVnZbFF9BTepJjs7WwutkscCn7BvhfDJjuBW83JLpmMt/ztZgYmnGjdW/51iREyBTUtLi8FJPESWCpDm9LDkxaHF5j61XaAUlMCd8NA+Nci8xPxlZy+/BvXV+ARHgYITe765bs1/UxwQc1TXWLf6JBO8AD97g+ugFx7/SV7RtwLLEsVllU6vcwYJNsMkbSbX+Oy33WsvCWw8rG8pvm4JoUf0XmeiYdudDgdGcUJmTsljMGPKCQlc6l0YgazmuuoWu3SwVRJ7ePJrYCz7kgrGDkmvmb5l05pPKU4YFH5eXuntXIr7JONJ2IX74EZuPJ9oHmlZu7bXDiHld7ce+Ow5kPyFny6jQ1zoZY0Nq96lCKF8BUef49eM8WXQES7QOsUc7Lam2uqjdmkUwiM8K1w3OQRfgv5jsb32+Aytdtumys8H2viFV2EqMd/7KkoK6H8eymgvNPf6USJprdv9oifcC9PTH3Q5kj2/EtD4Hq+vYseb60I0u4rDvb09qToTyYYp+5zc8dnXX1xzvKWl4hKr4R/Mfe13Yh09JJh85u261a1kA8rKcFPmYKXkwuzOpIsTrHyBF5vra35+ifDz8kqeY5IesyanTJlsA7HNmsk3doz2Hh5uNZSXlzvOnTvH4A4POjOFhQ8md5ieH2NF5TLGbgUXKghKADsCHMCvl0exVN5Cnquhcf2qg2gjLw5oumvr1q1D+v5qkD48ePxKU8gfgMdChMf/iuIryHJLy3YSztua3X88MSg8khMH4EZOoTAAgx64mY2c+HpXovGee82a08O197umhWUzuaQXpGIu/AvOcsaedRnOVW73K93DNVVCf3SgfZqPkZph5VR9j8IDw83ym93V9erBr5xSp894ii7MRjioBAbsr7zH8PE5qdNnjvvOtOlHD+3/qMuq8d5Dx3+C19XiY4cxhVGY8u+bzLzme9Pu2LF///tGcAMl9Jjx30r//MuuJ+ATQ8fQ3fhcY5M+44x2H2zb+4F68Js602BQLHTIHyjYgxODOAuD8Cxxx9/nZZeWBDdYlHvfTMRq9RB8MkUCSaMxAPf3ap2vBqenMrPLJ7V+3N5IprYFbYoo1A8YCiZkU/qnzifE+oHCwX3hT0Z0082CsQLklWb3Z2w0W6QZ/V+i2Xm9CnvVI8zVGA9P3k1ke8atIDhn9zZuqH59oOBHCwoXu1wJtXY6Q7AehNmf4sdOZE63YSI+3NKw5lSgPrG08/CwxnTqvskOKe9AyJiO9TEHMzJMjoz9rbm+esbAU0ZOcRmUTyXFCDD/j+tSeFplZaV/RWbklSg+ttPQztkZ+BofQI26HUzb/fUp74mWlqGVs+WJTb+yaev/vKwcj15KSoM2zgFLc/GZKP1Lf5DNwQyPMneM95TLqILMS4GZmXqqW96Fn9vUszDNNo1rnSA9tr+FgVX6BdrtYEJf7etyfrB168qwWaEB2DquwnJWNl4t490YiCfP0+gbuMZSmeSpjMvrhaBVA20TknsnG5JuorgACRIBm90v/NvuNacycsuqIHwC5+KwbuitvU5n29Y3VnZGQz1m91ZFbgN7XSEj736YHqOO4gb210TRMXvAbwh+XyyIObAJZkSSMZHii5S+pCTXUO+LBXE/q4MyjTqzYk2QRIrv8vjS7EdMwmdnN2gqpaw8uYEy3dTjFnX5IcVX+xM7B13lJUt+MRpL30lxQETn88pvP9Htm8glmyFNPt3Dt12vGwmTswqKVcbFnzoWEskKjth+WNNoH4z4nj39pk4N9jnvtmrSUsZk5JYcQu1HmL99ieP0Q+5XhneHrRBWeKVgevWk2yBM+slOcz6XfII/MIGqV3GS/4qBYEXUL3zndyceG32gfR+Wws0UO/qwiwYvLfTROzdA2HkIGvpdcXgCzPT1nDVPZOSUNGgO/bUZN177sd2kZoi2Vy7lnoMnLzeEMUsnloMVPReCXhWGSFtTfc30geeMgtK5ZMominFbge7/JojOuwY0fWZO8T3IM7hpGCuF4fgEqbXNGKA9Une2erWek9tra88PQf8CkG4eLwW7RXCmHJnb4QROILtMMnY0bcqEGwZGXO3JHp6yE8db36eowQycxNzdtKF650BJRl7ZA9ABr9qmQCpWYR9LJnaZgjWMka6PAqNF/8wgpF0BrvciUNmEeDg/IsGJjgjBlgUuNTVTDmYgeclOUHRQGvS3EHxXYGGvyTaAt9eIyNayVoeo/tS3ZCs0xnb08r7GBbn3Xj9Qf2FZCvEfaHCVmkKyB5VnXw/qWV3CNWNLQ9W24Aab69Ye40wswOjssctsP8se0H1qXKLxawo6ifkfd2VHU0NNERcEz5I9B2b3g2WbtKULxO40yJkxUHIhjZVboszTP4XrrmZZEt/kcIraN2tr2sjGMVFWdskNQqNHMbhL/fm44ehL+Q9ijqfTpl7bZEdpzV1UMlnX2e2Sy0L0/hFMbrgo1OBcz2zcsOqdfnn8aawXsJwesWSIGPLrcge+3+h16ru31756WrE5FPXM8vJRaePHe8H8YCLijooKPXl/+62CURZeeBc6Y1sxXTkwYLgbsweTRfVIWO5oCjqFmbP0Z+N2rHt52PN79U7xle9fSOcLQT8LA/1tFRdYNN1n+lj61k3Vxy/IBszPWz5RSO+WwKMheGpnpeRbuCZrGtfX2MrA3lFUkTDGc7wZL+7TSVuxub7yE4tmbF7BMhWVXSZ6fV7yJJ62isSUT3Hya6Mcy3sZlNzjTfVrmskGVDiOvb0UWn8RhEuDTGMvvpmeba6refLiYz+y8kuvxjxko1MKXvYx0zy7Z6amnrZrM7OzH0n06F1VoFHYT/kcwtrls6ZObIj0MDGj4P4byTRfuBA+EzJPDKtD/qCxrmavfSqw0QWlk3BstgBmb6zkrFXrke82Nq4eTLnF69CCw2L8Ckv4iSCavYLrC9/u32N2oHL2Tq+roV9wCmD0mMYcd26u++MxihPiInxWfsm9MHfVwfsMM/YhcX534D5ORxrbaXZPFVLDimYcByWdV6ZoBweyNaobTn8ehq37HYU6SR8gtTUfqa1TFAfEHNVl5ZXMQBz3e0sFI8V/BiswzdfzgJD8z1B6fzaleBcS7zpzpifwopOksRqSI8xKz9wqpHia4oSYhFd34nA68wcIkhJay9Y1NazeGFLKadqFO3z+wVKmaVyPlpQc2KapsrLH6eAFaHcshKxkP4Ont5DigKiFV+alz5RPghkrF3Yf57DtFkDKK/g6GwI3T3Jwu02vV34O99j6RFaa/5WRX3wbxYiohFehJU7WH8RJTCmF6A12jku5Ysh9yWhscJEmNMvAqbtPbMHg/s2CyHgElVULl5Z9h2JAVMJ7+Pal2M9P9F9BDQSCLvlQY8PqXUP1VUdeIWVcWl45b9m89ms4QOVkcflJ3f0z+sRL2ffddyVFiYiFX5hfPhtfz1rvc9qZNmXiG8P1R/QQ0s805JDX15rqq1rxrgqrOpTP6e3hFdFmdiISfkFBaRqOe7bitVcH12GGzpCmLxvOoelPd10XwoSuDefzyy31Na/gy+qunRMDsKxXS/5NNDevbXdQo2sYUjExxqoebmRV8/pVh4ejMXt+yRgMwPgQJpgMm1GCmwcHirVZVCEeoof/eqD9HooQtoU/53WmYpSnW9VhOt/3mX6nZFiMc3mvtqyQLKzw6u4P8mVPD3GYqsNh+ilFCNvCX/btq47AfB0JLofg3QgUS7e5a74KR4M7XEOcqjJbe/bmKZPeQrbpTxb91bHVTooQ9i8ev/iix+nTfxr0EhPL/ZmmjVVtdmgYXjbKqlwiNU82oPQJ03wP04Xj5oHep2FyH09LnVhFESIiJbFx46rDvaa+CHvsd/jsx6w/IzVXtd3+5z2dQyk2u5cLqGnDa22I1BZLlcUh+S7sZI5LdqyM5hpq3K6i2cG8vOIsJtlbFMrE+8j+RuqxKd5jOgse0T8tYya33NuGadj+I6UAxHwIPqLCS2ZaOjOcaaPpG8CICq9Jbunvc43H93zPJkZUeF/3SeXzI/ZnKsZHxsx/X3eHIPYofQP4f2HIFaBRjzrpAAAAAElFTkSuQmCC"}),n.createElement(m.Z,{headBlock:e})))};const h=()=>n.createElement("title",null,"Contact Us")},4405:function(e,t,a){a.d(t,{w_:function(){return o}});var n=a(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(r),c=function(){return c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)},s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function i(e){return e&&e.map((function(e,t){return n.createElement(e.tag,c({key:t},e.attr),i(e.child))}))}function o(e){return function(t){return n.createElement(m,c({attr:c({},e.attr)},t),i(e.child))}}function m(e){var t=function(t){var a,r=e.attr,l=e.size,i=e.title,o=s(e,["attr","size","title"]),m=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,o,{className:a,style:c(c({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(r)}},1023:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAyMCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjE0MjkgNi44NDcxQzE5LjYxOSA2LjM3ODU3IDE5LjYxOSA1LjYxNzY4IDE5LjE0MjkgNS4xNDkxNUwxNC4yNjc3IDAuMzUxMzk4QzEzLjc5MTYgLTAuMTE3MTMzIDEzLjAxODQgLTAuMTE3MTMzIDEyLjU0MjMgMC4zNTEzOThDMTIuMDY2MiAwLjgxOTkyOCAxMi4wNjYyIDEuNTgwODIgMTIuNTQyMyAyLjA0OTM1TDE1LjMzOCA0LjgwMDU2SDEuMjE4ODFDMC41NDQ2NTUgNC44MDA1NiAwIDUuMzM2NTYgMCA2QzAgNi42NjM0NCAwLjU0NDY1NSA3LjE5OTQ0IDEuMjE4ODEgNy4xOTk0NEgxNS4zMzhMMTIuNTQyMyA5Ljk1MDY1QzEyLjA2NjIgMTAuNDE5MiAxMi4wNjYyIDExLjE4MDEgMTIuNTQyMyAxMS42NDg2QzEzLjAxODQgMTIuMTE3MSAxMy43OTE2IDEyLjExNzEgMTQuMjY3NyAxMS42NDg2TDE5LjE0MjkgNi44NTA4NVY2Ljg0NzFaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"},1870:function(e,t,a){t.Z=a.p+"static/Horizontallogo_dk-9224135f5fd9dbf15a8d7ddc31de593e.png"},8338:function(e,t,a){t.Z=a.p+"static/sticker-75917f93cb775b2457dc7f59d785c5e7.png"}}]);
//# sourceMappingURL=component---src-pages-contact-index-tsx-4628df52b7c4869ca423.js.map