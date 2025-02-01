// Akses data berdasarkan data <li></li>, <main></main>, <p></p> dll
const tag_h1 = document.getElementsByTagName('h1');

// console.log(tag_h1[0].innerHTML);// 

// console.log(tag_h1[0].innerText);//

// console.log(tag_h1[0].textContent);//

// Akses data berdasarkan ID
const idDeskripsi = document.getElementById('deskripsi');

// console.log(idDeskripsi.textContent);

// Akses berdasarkan Class -------------------------------------------------------
const classData = document.getElementsByClassName('tanggal');

// console.log(classData[0].textContent); 
 
// Akses berdasarkan QuerySelector -------------------------------------------------------

const dataDeskripsi = document.querySelector('p'); // Jika ingin menggunakan ID gunakan #
const dataTanggal = document.querySelector('.tanggal'); 

// console.log(dataDeskripsi.textContent);
// console.log(dataTanggal.textContent);

// Akses Data berdasarkan QuerySelectorAll
const dataItem = document.querySelectorAll('.list-group-item');
// console.log(dataItem[2].textContent)


// Styling Element CSS

const dataP = document.querySelectorAll('#deskripsi');
// console.log(dataP[0].textContent);
dataP[0].style.background = "#AAABBB";
dataP[0].style.border = "2px solid #ccc";
dataP[0].style.borderRadius = "10px";
dataP[0].style.padding = "5px";

// Pengaturan Class - Menambahkan Class

const dataSmall = document.querySelector('small');

dataSmall.classList.add('bg-warning');

// console.log(dataSmall);

const dataUl = document.querySelector('ul'); // Mengurangi Class
// dataUl.classList.remove('list-group');
// console.log(dataUl);


// Menambahkan Toggle - Fungsinya untuk menambahkan class jika belum ada / menghilangkan class jika sudah ada pada tag

const tagh1 = document.querySelector('h1');
tagh1.classList.toggle('bg-danger');
// console.log(tagh1);

// Modifikasi element pada HTML - Menambahkan, Menghilangkan

const dataPenulis = document.createElement('div');
dataPenulis.textContent = "Michel Zyta";
// tagh1.before(dataPenulis);
tagh1.after(dataPenulis);

// dataP[0].remove();

// Mengetahui Class yang ada pada element
// console.log(dataSmall.className)
// console.log(dataSmall.getAttribute('id'))

// Modifikasi Atribut pada Element
// dataSmall.setAttribute('style', 'color:blue;');
// console.log(dataSmall.getAttribute('style'));

// <a href="https://www.google.com" class='btn btn-sm btn-primary'>www.google.com</a>
const dataLink = document.createElement('a');
dataLink.setAttribute('href','https://www.google.com');
dataLink.setAttribute('class','btn btn-sm btn-primary');
dataLink.text = 'Ke Google';
dataPenulis.after(dataLink);


// Modifikasi Text pada element tertentu
tagh1.textContent = 'Tutor DOM dong Puh! ' + tagh1.textContent + ' Subrek!';

// Traverse DOM Child - Untuk melihat Child dari Element misal isi dari Ul -> linya

// console.log(dataUl.innerHTML); // Melihat isi dari UL

const datali = dataUl.children;
// console.log(datali[0].textContent);

// Mengetahui Parent - Traverse Parrent

const dataList = document.querySelector('.list-group-item');
// console.log(dataList.parentElement);

// Traverse DOM Closest
const terdekat = dataList.closest('div');
// console.log(terdekat)


// Traverse DOM elementSibling
console.log(tagh1.previousElementSibling.textContent);

console.log(tagh1.nextElementSibling.textContent);