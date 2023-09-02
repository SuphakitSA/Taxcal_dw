function Togglemode() {
  const btn = document.getElementById('mode');
  const initialText = 'Toggle dark mode';
  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    var element = document.body;
    element.classList.toggle("dark-mode");
    btn.textContent = 'Toggle light mode';
    } 
  else {
    btn.textContent = initialText;
    var element = document.body;
    element.classList.toggle("dark-mode");
    }
}

function calculateTax() {
  const income = parseFloat(document.getElementById("income").value);
  const income2status = document.getElementById("income2");
  const income3status = document.getElementById("income3");
  let income2 = 0;
  let income3 = 0;
  if (income2status.disabled!=true){income2 = parseFloat(document.getElementById("income2").value);}//console.log(income2);
  if (income3status.disabled!=true){income3 = parseFloat(document.getElementById("income3").value);}

  let sumincome = 0;
  let  taxRate = 0;
  sumincome = sumincome+income+income2+income3;

  if (sumincome<150000){taxRate = 0;}
  else if(sumincome<=300000){taxRate = 0.05;}
  else if(sumincome<=500000){taxRate = 0.1;}
  else if(sumincome<=750000){taxRate = 0.15;}
  else if(sumincome<=1000000){taxRate = 0.2;}
  else if(sumincome<=2000000){taxRate = 0.25;}
  else if(sumincome<=5000000){taxRate = 0.30;}
  else{taxRate = 0.35;}

  const tax = sumincome * taxRate;

  document.getElementById("sum").value = `${sumincome}`;
  document.getElementById("taxRate").value = `${(taxRate * 100).toFixed(2)}%`;
  document.getElementById("taxResult").value = `${tax.toFixed(2)}`;
}

function addbox() {
  const income2 = document.getElementById("income2");
  const income3 = document.getElementById("income3");
  if (income2.disabled) {
    income2.removeAttribute("disabled");}
  else if (income3.disabled) {
    income3.removeAttribute("disabled");}
  calculateTax();
}

function delbox() {
  const income2 = document.getElementById("income2");
  const income3 = document.getElementById("income3");
  if (income3.disabled != true) {
    income3.setAttribute("disabled", "true");}
  else if (income2.disabled != true) {
    income2.setAttribute("disabled", "true");}
  calculateTax();
}
