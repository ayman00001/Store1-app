import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';

class Product extends Component {
    state = {
        products : [
          { id : 3232332,
            imageUrl : "./images/image01",
            title : "Dell latitude 3440",
            price : "2000",
            description : "8Gb RAM 256 SSD core i5 6éme gen"
          },
          { id : 627462746,
            imageUrl : "./images/image02",
            title : "Dell XPS 15",
            price : "5000",
            description : "8Gb RAM 256 SSD core i7 11éme gen"
          },
          { id : 7462467264,
            imageUrl : "./images/image03",
            title : "Smart Watch X34",
            price : "6999",
            description : "Anti Water"
          },
          { id : 472264726,
            imageUrl : "./images/image04",
            title : "Smart TV LG K22232",
            price : "3999",
            description : "OLED 4K FHD"
          }
        ]
      }
      render() {
        const {id, title} = this.state.products
        return (
        <div class="container mt-5">
          <div class="row">
          <div class="col-md-3">
          <div class="card">
              <img src="./images/img01.jpg" class="card-img-top" alt="Product 4"></img>
              <div class="card-body">
                  <h5 class="card-title">{}</h5>
                  <p class="card-text">$49.99</p>
                  <a href="#" class="btn btn-primary">Add to Cart</a>
                  </div>
                  </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                    <img src="./images/img02.jpg" class="card-img-top" alt="Product 1"></img>
                    <div class="card-body">
                        <h5 class="card-title">Product 1</h5>
                        <p class="card-text">$19.99</p>
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <img src="./images/img03.jpg" class="card-img-top" alt="Product 1"></img>
                    <div class="card-body">
                        <h5 class="card-title">Product 1</h5>
                        <p class="card-text">$19.99</p>
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <img src="./images/img04.jpeg" class="card-img-top" alt="Product 1"></img>
                    <div class="card-body">
                        <h5 class="card-title">Product 1</h5>
                        <p class="card-text">$19.99</p>
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
          </div>
          </div>
        )
      }
    }

export default Product;
