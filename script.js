const preview = document.getElementById("preview");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

let generatedHTML = "";

generateBtn.onclick = () => {
  const type = document.getElementById("siteType").value;
  const title = document.getElementById("titleInput").value || "My Website";
  const desc = document.getElementById("descInput").value || "Welcome to my website";

  generatedHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <style>
    body {
      font-family: Arial;
      margin: 0;
      padding: 40px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      text-align: center;
    }
    .box {
      max-width: 600px;
      margin: auto;
      background: rgba(255,255,255,0.15);
      padding: 40px;
      border-radius: 20px;
    }
  </style>
</head>
<body>
  <div class="box">
    <h1>${title}</h1>
    <p>${desc}</p>
    <p><b>Type:</b> ${type}</p>
  </div>
</body>
</html>
  `;

  preview.srcdoc = generatedHTML;
};

copyBtn.onclick = () => {
  if (!generatedHTML) {
    alert("Generate a website first!");
    return;
  }
  navigator.clipboard.writeText(generatedHTML);
  alert("HTML copied!");
};
