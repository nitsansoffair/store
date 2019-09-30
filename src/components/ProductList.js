import React, { Component } from 'react';
import Title from './Title';
import { ProductConsumer } from '../Context';
import Product from './Product';

class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our " title="products"/>
                        <div className="row">
                            <ProductConsumer>
                                {({ products }) => products.map((product) => (
                                        <Product key={product.id} product={product}/>
                                    )
                                )}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;