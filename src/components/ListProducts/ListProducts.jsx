import Product from '../Product/Product';

function ListProducts({ products }) {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col c-3 l-3 m-3">
          {!product.new && (
            <Product
              image={product.imageUrl}
              title={product.name}
              prevPrice={product.prevPrice}
              price={product.price}
              rent={product.rent}
              normal={product.normal}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ListProducts;
