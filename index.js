
const {createStore, combineReducers, applyMiddleware} = require("redux")
const {logger} = require("redux-logger")
const ADD_PRODUCT= "ADD_PRODUCT"
const GET_PRODUCT="GET_PRODUCT"
const ADD_CART="ADD_CART"
const GET_CART="GET_CART"


const initialProductState={
	products:["leptop"],
	count:1
	
}

const initialCartState={
	carts:["Appel"],
	cartsNumber:1
}

const addCart=(cart)=>{
	return{
		type:ADD_CART,
		payload:cart
	}
	
}

const getCart =()=>{
	return{
		type:GET_CART,
		...state
	}
}

const addProduct =(product)=>{
	return{
		type:ADD_PRODUCT,
		payload:product
	}
}



const productReducher =(state=initialProductState, action)=>{
	switch (action.type) {
		case ADD_PRODUCT:
			return{
				products:[...state.products, action.payload],
				count:state.count+1
			}
		case GET_PRODUCT:
			return{
				...state,
			}
			break;
		
		default:
			return state
	}
}

const cartReducher=(state=initialCartState, action)=>{
	switch (action.type) {
		case ADD_CART:
			return{
			carts:[...state.carts, action.payload],
			cartsNumber:state.cartsNumber+1
			}
		case GET_CART:
			return{
				...state
			}
		default:
			return state
	}
}
// create store
const rootReducher = combineReducers({
	productsR:productReducher,
	cartsR:cartReducher
})




const store = createStore(rootReducher, applyMiddleware(logger))
store.subscribe(()=>{
	console.log(store.getState())
})

store.dispatch(addCart("tv"))
store.dispatch(addProduct("i phone"))
















