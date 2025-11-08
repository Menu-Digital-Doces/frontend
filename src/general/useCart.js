import { ref, reactive, computed } from 'vue'

const cart = ref([])

const activeProductsInCart = reactive({
  '1': true, 
  '2': true, 
  '3': true, 
  '4': true, 
  '5': true, 
  '6': true, 
  '7': true
})

export function useCart() {
  const filteredCart = computed(() =>
    cart.value.filter(product => verifyProductState(product.id))
  )

  function loadCart() {
    const localCartString = localStorage.getItem('cart')
    const localCart = JSON.parse(localCartString || '[]')
    cart.value = Array.isArray(localCart) ? localCart : []
  }

  function removeItemFromCart(id) {
    cart.value = cart.value.filter(product => product.id !== id)
    localStorage.setItem('cart', JSON.stringify(cart.value))
    activeProductsInCart[id] = false
  }

  function verifyProductState(id) {
    return !!activeProductsInCart[id]
  }

  function increaseQuantity(id) {
    const productIndex = cart.value.findIndex(item => item.id === id)
    
    if (productIndex !== -1) {
      cart.value[productIndex].quantidadeDesejada += 1
      localStorage.setItem('cart', JSON.stringify(cart.value))
    }
  }

  function decreaseQuantity(id) {
    const productIndex = cart.value.findIndex(item => item.id === id)
    
    if (productIndex !== -1) {
      if (cart.value[productIndex].quantidadeDesejada > 1) {
        cart.value[productIndex].quantidadeDesejada -= 1
        localStorage.setItem('cart', JSON.stringify(cart.value))
      } else {
        removeItemFromCart(id)
      }
    }
  }

  return {
    cart,
    filteredCart,
    activeProductsInCart,
    loadCart,
    removeItemFromCart,
    verifyProductState,
    increaseQuantity,
    decreaseQuantity
  }
}