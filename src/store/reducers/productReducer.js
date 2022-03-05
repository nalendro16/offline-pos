import { products } from '../../utils/data'

const initialState = {
  product: products,
  carts: [],
}

const productReducer = (state = initialState, action) => {
  let { type, payload } = action
  switch (type) {
    default:
      return state
  }
}

export default productReducer
