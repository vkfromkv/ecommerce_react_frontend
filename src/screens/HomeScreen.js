import React from "react";
import { Row, Col } from "react-bootstrap";

import products from "../products";
import Product from "../components/Product";

function HomeScreen() {
  return (
    <div>
      <h1>Lastest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
