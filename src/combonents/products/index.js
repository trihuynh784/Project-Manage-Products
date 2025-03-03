import { useEffect, useState } from "react";
import { getProductList } from "../../services/productService";
import "./products.scss";
import ProductItem from "./ProductItem";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductList("products");
      setProducts(result);
    };
    fetchApi();
  }, []);

  return (
    <>
      <div className="product">
        {products.map((item) => (
          <ProductItem item={item} key={item.id}/>
        ))}
      </div>
    </>
  );
}

export default Products;
