import ProductUser from '../ProductUser/ProductUser';

function ListProducts({ products }) {
  return (
    <>
      <div className="row">
        {products.map((product) => (
          <div className="col l-3 m-4 c-6" key={product.id}>
            {!product.new && <ProductUser product={product} id={product.id} />}
          </div>
        ))}
      </div>
    </>
  );
}

export default ListProducts;
