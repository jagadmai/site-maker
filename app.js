const questions=[
 {q:"What type of site?",o:["Business","Portfolio","Blog","Other"]},
 {q:"Main goal?",o:["Sell","Showcase","Audience","Other"]},
 {q:"Style?",o:["Minimal","Bold","Aesthetic","Creative","Other"]}
];

let step=0,answers=[];
const qEl=document.getElementById("question");
const cEl=document.getElementById("choices");
const nextBtn=document.getElementById("nextBtn");
const other=document.getElementById("otherField");
const ai=document.getElementById("aiLoading");
const builder=document.getElementById("builder");
const frame=document.getElementById("previewFrame");

loadQ();

function loadQ(){
 qEl.innerText=questions[step].q;
 cEl.innerHTML="";
 nextBtn.disabled=true;
 other.style.display="none";

 questions[step].o.forEach(opt=>{
  const d=document.createElement("div");
  d.className="choice";
  d.innerText=opt;
  d.onclick=()=>{
   document.querySelectorAll(".choice").forEach(c=>c.classList.remove("active"));
   d.classList.add("active");
   if(opt==="Other"){other.style.display="block";nextBtn.disabled=true}
   else{other.style.display="none";nextBtn.disabled=false}
   nextBtn.dataset.val=opt;
  };
  cEl.appendChild(d);
 });
}

other.oninput=()=>nextBtn.disabled=other.value.trim()==="";

nextBtn.onclick=()=>{
 answers.push(nextBtn.dataset.val==="Other"?other.value:nextBtn.dataset.val);
 step++;
 step<questions.length?loadQ():build();
};

function build(){
 cEl.style.display="none";
 nextBtn.style.display="none";
 other.style.display="none";
 ai.style.display="block";

 let dots=0;
 const t=setInterval(()=>{
  ai.innerText="AI is building your website"+".".repeat(dots%4);
  dots++;
 },300);

 setTimeout(()=>{
  clearInterval(t);
  document.getElementById("flow").style.display="none";
  builder.style.display="flex";
  generateSite();
 },3500);
}

function generateSite(){
 const html=`
 <html>
 <head>
 <style>
 body{font-family:Inter;padding:40px;animation:fade .8s}
 @keyframes fade{from{opacity:0}to{opacity:1}}
 h1{font-size:42px}
 section{margin-top:30px}
 </style>
 </head>
 <body contenteditable="true">
 <h1>Your AI Website</h1>
 <section>This content is fully editable.</section>
 <section>Add sections. Change text. Make it yours.</section>
 </body>
 </html>`;
 frame.srcdoc=html;
}

function exportSite(){
 const blob=new Blob([frame.srcdoc],{type:"text/html"});
 const a=document.createElement("a");
 a.href=URL.createObjectURL(blob);
 a.download="siteforge-site.html";
 a.click();
}


