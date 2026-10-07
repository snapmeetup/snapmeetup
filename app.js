const seed=[
 {snap:"maya_snap",age:21,country:"USA",gender:"Girl",bio:"Friendly, social and always up for meeting new people.",emoji:"👩🏻"},
 {snap:"alexchat",age:24,country:"Canada",gender:"Guy",bio:"Music, travel and late-night conversations.",emoji:"👨🏻"},
 {snap:"zara_vibes",age:22,country:"UK",gender:"Girl",bio:"Here to meet fun new people from around the world.",emoji:"👩🏽"},
 {snap:"together2",age:27,country:"Australia",gender:"Couple",bio:"Adventures, good vibes and new friends.",emoji:"👩🏻‍❤️‍👨🏻"},
 {snap:"sophiehello",age:23,country:"Germany",gender:"Girl",bio:"Coffee, movies and making new friends.",emoji:"👩🏼"},
 {snap:"sam_online",age:25,country:"USA",gender:"Guy",bio:"Say hello 👋",emoji:"🧑🏻"}
];
let profiles=JSON.parse(localStorage.getItem("snapmeetup_profiles")||"null")||seed;
let filter="All";
const box=document.querySelector("#profiles");
function render(){
 const q=document.querySelector("#search").value.toLowerCase();
 const arr=profiles.filter(p=>(filter==="All"||p.gender===filter)&&(`${p.snap} ${p.country} ${p.bio}`.toLowerCase().includes(q)));
 document.querySelector("#count").textContent=arr.length+" profiles";
 box.innerHTML=arr.map(p=>`<article class="card"><div class="photo">${p.emoji||"👤"}</div><div class="info"><h3>${esc(p.snap)} <span style="color:#ff2f8b">●</span></h3><div class="meta">${p.age} • ${esc(p.country)} • ${p.gender}</div><p class="bio">${esc(p.bio)}</p><a class="snap" href="https://www.snapchat.com/add/${encodeURIComponent(p.snap)}" target="_blank">👻 Add on Snapchat</a><div class="socials"><span>✈️ 🔒</span><span>💬 🔒</span><span>🎮 🔒</span></div></div></article>`).join("");
}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
document.querySelectorAll(".filters button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");filter=b.dataset.filter;render()});
function openSubmit(){document.querySelector("#modal").classList.add("show")} function closeSubmit(){document.querySelector("#modal").classList.remove("show")}
document.querySelector("#form").onsubmit=e=>{e.preventDefault();profiles.unshift({snap:snap.value.trim(),age:+age.value,country:country.value.trim(),gender:gender.value,bio:bio.value.trim()||"New to SnapMeetUp 👋",emoji:"👤"});localStorage.setItem("snapmeetup_profiles",JSON.stringify(profiles));e.target.reset();closeSubmit();render();alert("Demo profile added on this device. Real database + admin approval comes in the next stage.")};
render();