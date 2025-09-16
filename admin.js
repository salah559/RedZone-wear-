function loginAdmin(){
const pass = document.getElementById('admin-pass').value;
if(pass==='admin123'){
document.getElementById('admin-dashboard').style.display='block';
fetch('products.json')
.then(res=>res.text())
.then(text=>document.getElementById('products-json').value=text);
} else { alert('كلمة المرور خاطئة!'); }
}
function saveProducts(){
const newData = document.getElementById('products-json').value;
alert('تم تحديث JSON (على جهازك فقط)');
console.log(newData);
}