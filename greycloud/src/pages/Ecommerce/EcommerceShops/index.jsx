import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"
import { map } from "lodash"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

//Import Card
import CardShop from "./CardShop"
import { getShops as onGetShops } from "../../../store/e-commerce/actions"

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect"

const EcommerceShops = () => {

  //meta title
  document.title="Shops | Skote React + Laravel 10 Admin And Dashboard Template";

  const dispatch = useDispatch()

  const ecommerceSelector = createSelector(
    state => state.ecommerce,
    ecommerce => ({
      shops: ecommerce.shops,
    })
  );
  
  const { shops } = useSelector(ecommerceSelector);

  useEffect(() => {
    dispatch(onGetShops())
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Shops" />
          <Row>
            {map(shops, (shop, key) => (
              <CardShop shop={shop} key={"_shop_" + key} />
            ))}
          </Row>
          <Row>
            <Col xs="12">
              <div className="text-center my-3">
                <Link to="#" className="text-success">
                  <i className="bx bx-loader bx-spin font-size-18 align-middle me-2" />
                  Load more
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

EcommerceShops.propTypes = {
  shops: PropTypes.array,
  onGetShops: PropTypes.func,
}

export default EcommerceShops;
