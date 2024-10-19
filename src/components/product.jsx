import 'bootstrap/dist/css/bootstrap.css';


function Product({product}) {
    return(
      <div class="container">
      <div class="row">
      <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={product.thumbnail} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-muted">${product.price}</span>
            <button className="btn btn-sm btn-outline-secondary">Add to Cart</button>
          </div>
        </div>
      </div>
      </div>
      <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={product.thumbnail} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-muted">${product.price}</span>
            <button className="btn btn-sm btn-outline-secondary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={product.thumbnail} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-muted">${product.price}</span>
            <button className="btn btn-sm btn-outline-secondary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
      </div>
      </div>
    )
}





export default Product