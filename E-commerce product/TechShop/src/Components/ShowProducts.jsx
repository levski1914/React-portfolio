import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
const ShowProducts = ({ products, addItemsToCart, filterCourseFunction }) => {
  return (
    <>
      {filterCourseFunction.length === 0 ? (
        <p> Sorry no results </p>
      ) : (
        filterCourseFunction.map((product) => (
          <div className="card p-0" style={{ width: "17rem" }}>
            <img
              src={product.img}
              className=" w-100"
              style={{ objectFit: "cover" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{product.productTitle}</h5>
              <p>
                <span
                  style={{
                    color: "#F03637",
                    fontWeight: "700",
                    fontSize: "1.2rem",
                  }}
                >
                  ${product.productPrice}.00
                </span>
              </p>
            </div>
            <div className="product-inner">
              <ul>
                <li
                  className="border border-dark"
                  onClick={() => addItemsToCart(product)}
                >
                  {" "}
                  <FontAwesomeIcon icon={faCartShopping} />
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faHeart} />
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faShuffle} />
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </li>
              </ul>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ShowProducts;
