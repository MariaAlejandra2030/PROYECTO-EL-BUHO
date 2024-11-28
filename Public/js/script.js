
import { eliminarCarrito, onProduct, updateCartUI } from "./Carrito.js";
import { añadirCarrito, generartarjetas } from "./Generartarjetas.js";

const categorias = [
  {
    name: 'Desarrollo personal',
    URL: '/Vistas/Categoriapersonal.html'
  },
  {
    name: 'Arte',
    URL: '/Vistas/Categoriasarte.html'
  },

  {
    name: 'Ficcion',
    URL: '/Vistas/Categoriasficcion.html'
  },

  {
    name: 'Infaltil',
    URL: '/Vistas/Categoriasinfantil.html'
  }
]

categorias.forEach(categoria => {
  if (categoria.URL === window.location.pathname) {
    generartarjetas(categoria.name)

    añadirCarrito()
  }
})

if (window.location.pathname === "/Vistas/cart.html") {
  //localStorage.removeItem('Items');
  updateCartUI()
  eliminarCarrito()
  onProduct()

}



// document.querySelectorAll('.add-to-cart').forEach(button => {
//    button.addEventListener('click', function() {

//        
//    });
// });

// document.querySelector('.search-button').addEventListener('click', function() {
//    const query = document.querySelector('.search-bar').value.toLowerCase();
//    const books = document.querySelectorAll('.book');

//    books.forEach(book => {
//        const title = book.querySelector('h4').innerText.toLowerCase();
//        if (title.includes(query)) {
//            book.style.display = 'block'; 
//        } else {
//            book.style.display = 'none';
//        }
//    });
// });


let userBox = document.querySelector('.header .header-2 .user-box');

// document.querySelector('#user-btn').onclick = () =>{
//    userBox.classList.toggle('active');
//    navbar.classList.remove('active');
// }

let navbar = document.querySelector('.header .header-2 .navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  userBox.classList.remove('active');
}

window.onscroll = () => {
  userBox.classList.remove('active');
  navbar.classList.remove('active');

  if (window.scrollY > 60) {
    document.querySelector('.header .header-2').classList.add('active');
  } else {
    document.querySelector('.header .header-2').classList.remove('active');
  }
}

