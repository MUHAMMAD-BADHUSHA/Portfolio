// Get the current year and display it
document.getElementById("year").textContent = new Date().getFullYear();

// let numeIcon = document.querySelector('#menu-icon')
// let navbar =document.querySelector('.navbar')

// menuIcon.onClick=()=>{
//     menuIcon.classList.toggle('fa-xmark')
//     navbar.classList.toggle('active')
// }

// let section=document.querySelector('section')
// let navLink=document.querySelector('header nav a')

// windows.onscroll=()=>{
//     section.forEach(sec=>{
//         let top=window.scrollY;
//         let offset=sec.offsetTop-150;
//         let height =sec.offsetHeight;
//         let id =sec.getAttribute('id')
//         if(top >= offset && top < offset + height){
//             navLink.forEach.apply(links=>{
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*='+id+']').classList.add('active')
//             })
//         }
//     })
//     let header=document.querySelector('header')
//     header.classList.toggle('sticky',window.scrollY>100)

//     menuIcon.classList.remove('fa-xmark')
//     navbar.classList.remove('active')
// }