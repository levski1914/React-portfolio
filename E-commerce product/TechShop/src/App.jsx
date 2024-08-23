import { useState } from "react";
import { toast } from "react-toastify";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "./Components/Carousel";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import TopProducts from "./Components/TopProducts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ByCateg from "./Components/ByCateg";
const products = [
  {
    id: 1,
    img: "https://demo-61.woovinapro.com/wp-content/uploads/2018/09/product-14.jpg",
    productTitle: "Smartwatch",
    productPrice: 69.5,
  },
  {
    id: 2,
    img: "https://demo-61.woovinapro.com/wp-content/uploads/2020/11/product-1.jpg",
    productTitle: "Xbox",
    productPrice: 70,
  },
  {
    id: 3,
    img: "https://demo-61.woovinapro.com/wp-content/uploads/2018/09/product-16.jpg",
    productTitle: "Samsung s22 ultra",
    productPrice: 70,
  },
  {
    id: 4,
    img: "https://demo-61.woovinapro.com/wp-content/uploads/2020/11/product-4.jpg",
    productTitle: "Beats by DRE",
    productPrice: 70,
  },
  {
    id: 5,
    img: "https://demo-61.woovinapro.com/wp-content/uploads/2022/04/cate1.jpg",
    productTitle: "Ipad",
    productPrice: 70,
  },
  {
    id: 6,
    img: "https://demo-61.woovinapro.com/wp-content/uploads/2022/04/cate3.jpg",
    productTitle: "VR Glasses",
    productPrice: 70,
  },
  {
    id: 7,
    img: "https://demo-61.woovinapro.com/wp-content/uploads/2020/11/product-8.jpg",
    productTitle: "Smartwatch Apple",
    productPrice: 70,
  },
  {
    id: 8,
    img: "https://demo-61.woovinapro.com/wp-content/uploads/2018/09/product-10.jpg",
    productTitle: "Camera NIkon",
    productPrice: 70,
  },
];

function App() {
  // const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  const [quant, setQuant] = useState(0);

  const addItemsToCart = (Items) => {
    const alreadyItems = cartItems.find((item) => item.product.id === Items.id);
    if (alreadyItems) {
      const lastCartUpdate = cartItems.map((item) =>
        item.product.id === Items.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(lastCartUpdate);
    } else {
      toast.success("Item successfuly added");
      setCartItems([...cartItems, { product: Items, quantity: 1 }]);
    }
  };

  const deleteItemsFromCart = (Items) => {
    const updatedCart = cartItems.filter((item) => item.product.id != Items.id);
    toast.success("Item removed from cart");
    setCartItems(updatedCart);
  };

  const totalAmountCalcFunc = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.productPrice * item.quantity,
      0
    );
  };

  const totalQuantityCalcFunc = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  //   const totalQuantity = totalQuantityCalcFunc();

  console.log(totalQuantityCalcFunc());
  const filterCourseFunction = products.filter((item) =>
    item.productTitle.toLowerCase().includes(searchItems.toLowerCase())
  );
  return (
    // products,
    // addItemsToCart,
    // filterCourseFunction,
    // cartItems,
    // deleteItemsFromCart,
    // totalAmountCalcFunc,
    // setCartItems,
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header
          totalQuantityCalcFunc={totalQuantityCalcFunc}
          totalAmountCalcFunc={totalAmountCalcFunc}
        />
        <TopProducts
          products={products}
          addItemsToCart={addItemsToCart}
          filterCourseFunction={filterCourseFunction}
          cartItems={cartItems}
          deleteItemsFromCart={deleteItemsFromCart}
          totalAmountCalcFunc={totalAmountCalcFunc}
          setCartItems={setCartItems}
        />
        <ByCateg />
        <Routes>
          <Route />
          <Route />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
