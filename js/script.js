// let userBox = document.querySelector('.header .header-2 .user-box');

// document.querySelector('#user-btn').onclick = () =>{
//    userBox.classList.toggle('active');
//    navbar.classList.remove('active');
// }

// let navbar = document.querySelector('.header .header-2 .navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//    navbar.classList.toggle('active');
//    userBox.classList.remove('active');
// }

// window.onscroll = () =>{
//    userBox.classList.remove('active');
//    navbar.classList.remove('active');

//    if(window.scrollY > 60){
//       document.querySelector('.header .header-2').classList.add('active');
//    }else{
//       document.querySelector('.header .header-2').classList.remove('active');
//    }
// }
// Función para agregar un libro al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
   button.addEventListener('click', function() {
       // Mostrar un mensaje de que el libro se ha agregado al carrito
       alert('El libro ha sido agregado al carrito.');

       // Aquí podrías agregar el código para actualizar el contador del carrito, si es necesario
   });
});

// Función de búsqueda simple (si decides implementarla)
document.querySelector('.search-button').addEventListener('click', function() {
   const query = document.querySelector('.search-bar').value.toLowerCase();
   const books = document.querySelectorAll('.book');

   books.forEach(book => {
       const title = book.querySelector('h4').innerText.toLowerCase();
       if (title.includes(query)) {
           book.style.display = 'block'; // Mostrar el libro si coincide con la búsqueda
       } else {
           book.style.display = 'none'; // Ocultar el libro si no coincide
       }
   });
});
