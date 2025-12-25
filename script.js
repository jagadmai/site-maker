const preview = document.getElementById("preview");

let pageContent = `
<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial;
  padding: 40px;
}
button {
  padding: 10px 20px;
}
</style>
</head>
<body>
</body>
</html>
`;

function updatePreview() {
  preview.srcdoc = pageContent;
}

function addHeading() {
  pageContent = pageContent.replace(
    "</body>",
    "<h1 contenteditable='true'>Editable Heading</h1></body>"
  );
  updatePreview();
}

function addText() {
  pageContent = pageContent.replace(
    "</body>",
    "<p contenteditable='true'>Editable text</p></body>"
  );
  updatePreview();
}

function addButton() {
  pageContent = pageContent.replace(
    "</body>",
    "<button contenteditable='true'>Click Me</button></body>"
  );
  updatePreview();
}

function exportHTML() {
  navigator.clipboard.writeText(pageContent);
  alert("Website HTML copied!");
}

updatePreview();
