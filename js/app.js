(() => {
  const page=document.body.dataset.page||"home";
  const nav=[["index.html","Bosh sahifa","home"],["courses.html","Kurslar","courses"],["student.html","O‘quvchi kabineti","student"],["admin.html","Admin panel","admin"]];
  const header=document.getElementById("site-header");
  if(header){
    header.innerHTML=`<header class="site-header"><div class="container nav-wrap"><a class="brand" href="index.html"><span class="brand-mark">E</span><span>EduCenter<small>Bilim kelajakni quradi</small></span></a><button class="mobile-menu" id="mobile-menu" aria-label="Menyuni ochish" aria-expanded="false">☰</button><nav class="nav-links" id="nav-links">${nav.map(([url,label,key])=>`<a href="${url}" class="${page===key?'active':''}">${label}</a>`).join("")}</nav><div class="nav-actions"><a class="btn btn-light" href="login.html">Kabinetga kirish</a><a class="btn btn-primary" href="register.html">Ariza qoldirish ↗</a></div></div></header>`;
    const toggle=document.getElementById("mobile-menu"),links=document.getElementById("nav-links");
    toggle.addEventListener("click",()=>{const open=links.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"×":"☰"});
  }
  const footer=document.getElementById("site-footer");
  if(footer)footer.innerHTML=`<footer class="site-footer"><div class="container"><div class="footer-top"><div class="footer-about"><a class="brand" href="index.html"><span class="brand-mark">E</span><span>EduCenter<small style="color:#aab5cb">Bilim kelajakni quradi</small></span></a><p>Bilim, amaliyot va imkoniyatlar birlashgan ta’lim muhiti. O‘z kelajagingizni bugun quring.</p></div><div class="footer-links"><div><strong>Sayt xaritasi</strong><a href="courses.html">Kurslar</a><a href="register.html">Ro‘yxatdan o‘tish</a><a href="login.html">Shaxsiy kabinet</a></div><div><strong>Demo kabinetlar</strong><a href="student.html">O‘quvchi kabineti</a><a href="admin.html">Admin panel</a><a href="course-detail.html?id=web">Kurs tafsilotlari</a></div></div></div><div class="footer-bottom"><p>© 2026 EduCenter. Demo loyiha.</p><p>HTML · CSS · JavaScript · localStorage</p></div></div></footer>`;
  window.EduUI={
    courseCard(c){return `<article class="course-card"><a class="course-art art-${c.color}" href="course-detail.html?id=${encodeURIComponent(c.id)}"><span class="course-level">${c.level}</span><span class="course-symbol">${c.symbol}</span></a><div class="course-content"><div class="course-meta"><span>◷ ${c.duration}</span><span>★ ${c.rating} · ${c.students} o‘quvchi</span></div><h3><a href="course-detail.html?id=${encodeURIComponent(c.id)}">${c.title}</a></h3><p>${c.description}</p><div class="course-bottom"><div class="course-price"><strong>${EduData.money(c.price)}</strong><small>oyiga</small></div><a class="arrow-button" href="course-detail.html?id=${encodeURIComponent(c.id)}" aria-label="${c.title} tafsilotlari">↗</a></div></div></article>`},
    toast(message){const old=document.querySelector(".toast");if(old)old.remove();const el=document.createElement("div");el.className="toast";el.textContent=message;document.body.append(el);setTimeout(()=>el.remove(),3000)},
    paymentLabel(value){return ({paid:"To‘langan",pending:"Kutilmoqda",debt:"Qarzdor"})[value]||value},
    statusClass(value){return ({Faol:"status-active",Sinov:"status-trial","To‘xtatilgan":"status-stopped",paid:"status-paid",pending:"status-pending",debt:"status-debt"})[value]||""},
    initials(name){return String(name||"?").trim().split(/\s+/).slice(0,2).map(s=>s[0]||"").join("").toUpperCase()}
  };
})();