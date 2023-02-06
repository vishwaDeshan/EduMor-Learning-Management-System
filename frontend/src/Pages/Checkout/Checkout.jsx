import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./Checkout.css";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';
import BillingForm from "../../Components/BillingForm/BillingForm";


function Checkout() {

  return (
    <div className="page">
      <div className="checkoutPage">
        <div className="readCrumb">
          <MDBBreadcrumb >
            <MDBBreadcrumbItem>
              <a href='/'>Overview</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <a href='/myPayments'>Payments</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Checkout</MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </div>
        <h2>Checkout</h2>
        <div className="paymentSection">
          <BillingForm/>
        </div>
      </div>
      <div className="footer" style={{ diplay: "flex" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Checkout;
