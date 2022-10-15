import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { getProductById } from '../services/api';
import addItem from '../services/cart';
import '../styles/productDetails.css';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const productDetails = await getProductById(id);
    this.setState({ product: productDetails, loading: false });
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { id } } } = this.props;
    if (prevProps.match.params.id !== id) {
      this.componentDidMount();
    }
  }

  addCart = () => {
    const { product } = this.state;
    addItem(product);
  };

  render() {
    const { product, loading } = this.state;
    if (loading) {
      return <p>Carregando...</p>;
    }
    return (
      <div className="productDetails">
        <div className="linkHomeCart">
          <Link to="/">Home</Link>
          <Link
            to="/cart"
            data-testid="shopping-cart-button"
          >
            Cart
          </Link>
        </div>
        <div className="divImagePrice">
          <div className="imagePrice">
            <p
              data-testid="product-detail-price"
            >
              {product.price}

            </p>
            <img
              src={ product.thumbnail }
              alt={ product.title }
              data-testid="product-detail-image"
            />
          </div>
          <p
            className="price"
            data-testid="product-detail-name"
          >
            {product.title}
          </p>
        </div>
        <br />
        <div className="buttonQuantity">
          <button
            className="productDetails__button"
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ this.addCart }
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }).isRequired,
  // getCartItensArray: propTypes.func.isRequired,
};

export default ProductDetails;
