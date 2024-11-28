 import { buscarLibros } from './Carrito.js';
import libros from './Libros.json' with { type: "json" };

export function generartarjetas(categoria) {
    const $bookContainer = document.querySelector('.books-container')
    const $bookrouw = document.createElement('div')
    const $book = document.createElement('div')
    $bookrouw.classList.add('books-row')
  
    libros.filter(libro => libro.Categorias === categoria).map(libro => {
      const $bookCard = document.createElement('div')
      $bookCard.classList.add('book')
      $bookCard.id = libro.Id
      $bookCard.innerHTML = ` 
       <img src="${libro.imagen}" alt="${libro.Nombre}">
         <h4>${libro.Nombre}</h4>   
         <p><a href="${libro.url}" class="details-link">Ver Detalles</a></p>
         <p>Precio: $${libro.Precio}</p>
         <p>Detalles: ${libro.Detalles}</p>
         
      
      `;
      const $bttonAñadirCarrito = document.createElement('button')
      $bttonAñadirCarrito.classList.add('add-to-cart-detalles')
      $bttonAñadirCarrito.id = libro.id
      $bttonAñadirCarrito.innerHTML = `Añadir al carrito` 
      
      $bookCard.append($bttonAñadirCarrito)
      $bookrouw.appendChild($bookCard);
    
    });

    $bookContainer.appendChild($bookrouw);
  
  
  }

  export function añadirCarrito (){
    const btton = document.querySelectorAll('.add-to-cart-detalles') || null
  
    if (btton == null) return
    
    btton.forEach(btton => {
      btton.addEventListener('click', (e) => {
        const id = e.target.getAttribute('id');

        if (!id) return
        buscarLibros(id)
  
  
        console.log(id);
      })
    })
  
  }