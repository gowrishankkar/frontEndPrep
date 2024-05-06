import "./pagination.css";
import { useEffect, useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(data.total / 10);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    )
      setPage(selectedPage + 1);
  };

  return (
    <div>
      test
      {products.length > 0 && (
        <div className="products">
          {products.map((prod) => {
            return (
              <span className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination_disabled"}
          >
            ◀️
          </span>
          {[...Array(totalPages)].map((i, index) => {
            return (
              <span
                className={page === index + 1 && "pagination__selected"}
                onClick={() => selectPageHandler(index + 1)}
                key={index}
              >
                {index + 1}
              </span>
            );
          })}

          <span
            onClick={() => selectPageHandler(page + 1)}
            className={page < totalPages ? "" : "pagination_disabled"}
          >
            ▶️
          </span>
        </div>
      )}
    </div>
  );
};
export default Pagination;
