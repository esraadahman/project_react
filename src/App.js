import "./App.css";
import Home from "./components/Home";
import Products from "./components/ProductsDetails";
import ProductDetails from "./components/ProductDetail";
import ProductForm from "./components/ProductAdd";
import SharedComponent from "./Layout/SharedComponents";
import NotFound from "./components/NotFound";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { useState } from "react";
import { productsList } from "./ProductsModel/ProductsModel";

function App() {
	let [products, setProducts] = useState(productsList);
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element={<SharedComponent />}>
					<Route index element={<Home />} />
					<Route
						path='products'
						element={<Products products={products} setProducts={setProducts} />}
					/>
					<Route
						path='products/:id'
						element={
							<ProductDetails products={products} setProducts={setProducts} />
						}
					/>
					<Route
						path='products/:id/edit'
						element={
							<ProductForm products={products} setProducts={setProducts} />
						}
					/> 
					 <Route path='*' element={<NotFound />} /> 
				</Route>
			</>
		)
	);
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;