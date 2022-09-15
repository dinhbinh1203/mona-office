import ProductUser from '../ProductUser/ProductUser';

function ListProducts({ products }) {
  return (
    <>
      <div className="row">
        {products.map((product) => (
          <div className="col c-3 l-3 m-3" key={product.id}>
            {!product.new && <ProductUser product={product} />}
          </div>
        ))}
      </div>
    </>
  );
}

export default ListProducts;
