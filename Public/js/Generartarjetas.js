 import libros from './Libros.json' with { type: "json" };

export function generartarjetas(categoria) {
    const $bookContainer = document.querySelector('.books-container')
    const $bookrouw = document.createElement('div')
    $bookrouw.classList.add('books-row')
  
    libros.filter(libro => libro.Categorias === categoria).map(libro => {
      const $bookCard = document.createElement('div')
      $bookCard.classList.add('book')
      $bookCard.innerHTML = ` 
       <img src="${libro.imagen}" alt="${libro.Nombre}">
         <h4>${libro.Nombre}</h4>   
         <p><a href="${libro.url}" class="details-link">Ver Detalles</a></p>
         <p>Precio: $${libro.Precio}</p>
         <p>Detalles: ${libro.Detalles}</p>
         <a href="../Vistas/cart.html"><button class="add-to-cart-detalles">Agregar al Carrito</button></a>
      
      `;

      $bookrouw.appendChild($bookCard);
    
    });

    $bookContainer.appendChild($bookrouw);
  
  
  }