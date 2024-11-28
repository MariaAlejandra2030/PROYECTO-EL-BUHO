import libros from './Libros.json' with { type: "json" };

const cartItemsContainer = document.querySelector('.cart-items');
const totalPriceElement = document.getElementById('totalPrice');
const finalPriceElement = document.getElementById('finalPrice');
const carroElement = document.querySelector('.carro');

export function buscarLibros(id) {
   let cart = JSON.parse(localStorage.getItem('Items')) || []
   // Esto almacenará los productos del carrito
   let libroID = libros.filter(libro => {
      return libro.id == id
   })
   libroID[0].quantity = 1
   let newCart = [...libroID, ...cart];
   localStorage.setItem('Items', JSON.stringify(newCart));
}





// Ejemplo de productos con imagen
//    const books = [
//       { id: 1, name: "TOMATELO", price: 54900, image: "../Public/images/tomatelo.jpg", details: "Libro sobre Michelle Obama" },
//       { id: 2, name: "HARRY POTTER", price: 75000, image: "../Public/images/Harry.png", details: "Libro sobre Michelle Obama" },
//       { id: 3, name: "CREPUSCULO", price: 54000, image: "../Public/images/Crepusculo.png", details: "Libro sobre Michelle Obama" },
//       { id: 4, name: "TOMATELO", price: 54.900, image: "../Public/images/tomatelo.jpg", details: "Libro sobre Michelle Obama" },
//    ];

function addToCart(book) {
   let cart = JSON.parse(localStorage.getItem('Items'))
   const productIndex = cart.findIndex(item => item.id === book.id);
   if (productIndex !== -1) {
      // Si el producto ya está en el carrito, solo aumentamos la cantidad
      cart[productIndex].quantity++;
      localStorage.setItem('Items', JSON.stringify(cart))
   } else {
      // Si no está, lo añadimos al carrito con una cantidad de 1
      cart.push({ ...book, quantity: 1 });
      localStorage.setItem('Items', JSON.stringify(cart))
   }

   updateCartUI();
}

// Función para eliminar un producto del carrito
function removeFromCart(bookId) {
   let cart = JSON.parse(localStorage.getItem('Items'))
   let newCart = cart.filter((cart) => {
      if (cart.id != bookId) return cart
      else return
   })


   // .filter(item => item !== null);

   if (newCart.length > 0) {
      localStorage.setItem('Items', JSON.stringify(newCart))

      console.log(cart, newCart, "a", bookId)
      updateCartUI();

   } else {
      localStorage.removeItem('Items')

      console.log(cart, newCart, bookId)
      updateCartUI();
   }

   window.location.reload();

}




// Función para actualizar el carrito en la interfaz de usuario
export function updateCartUI() {
   let cart = JSON.parse(localStorage.getItem('Items')) || []
   if (createImageBitmap.length >= 0) {
      cartItemsContainer.innerHTML = `
        <div class="infoCarro">
          <h3 class="carro">Carro (0 productos)</h3> <!-- Este número cambiará dinámicamente -->
          <div class="cart-items"></div> <!-- Aquí se mostrarán los productos añadidos -->
        </div>
      `
    
    }
   cartItemsContainer.innerHTML = '';

   // Calcular el total
   let totalPrecio = 0;
   cart.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('cart-item');
      itemElement.innerHTML = `
            <img src="${item.imagen}" alt="${item.Nombre}" class="imgLibro"> <!-- Carga la imagen del libro -->
            <div class="item-info">
               <h4>${item.Nombre}</h4>
               <p>Precio: $${item.Precio}</p>
               <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-id="${item.id}">
               <button class="remove-item" id ="${item.id}">Eliminar</button>
            </div>
         `;
      cartItemsContainer.appendChild(itemElement);
      totalPrecio += item.Precio * item.quantity;
   });

   // Actualizar los totales
   totalPriceElement.textContent = `$${totalPrecio}`;
   finalPriceElement.textContent = `$${totalPrecio}`;

   // Actualizar el número de productos en el carrito
   carroElement.textContent = `Carro (${cart.length} productos)`;
}

// Event listener para actualizar la cantidad de un producto

export function onProduct() {

   cartItemsContainer.addEventListener('input', function (e) {
      if (e.target.classList.contains('quantity-input')) {
         const productId = parseInt(e.target.getAttribute('data-id'));
         const newQuantity = parseInt(e.target.value);
         const product = cart.find(item => item.id === productId);
         if (product) {
            product.quantity = newQuantity;
            updateCartUI();
         }
      }
   });
}


export function eliminarCarrito() {
   const btton = document.querySelectorAll('.remove-item') || null

   console.log("Actualizar")

   if (btton == null) return


   btton.forEach(btton => {
      btton.addEventListener('click', (e) => {
         const id = e.target.getAttribute('id');
         if (!id) return
         removeFromCart(id)

         console.log(id);


      })
   })



}





