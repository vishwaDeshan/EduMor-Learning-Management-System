import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./Checkout.css";
// import CreditCard from "../../Components/CreditCard/CreditCard";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';


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
          <div className="cardsinfo">
            {/* <CreditCard /> */}
          </div>
          <div className="payment-details">
            <h4>Payment Information</h4>
            <div className="payment-info">
              <div className="package name">
                Package Name:
                <span className="package value"> Premium Membership</span>
              </div>
              <div className="tax name">
                <span>Tax (%8):</span>
                <span className="tax value">Rs. 450.00</span>
              </div>
              <div className="amount name">
                <span>Amount:</span>
                <span className="amount value">Rs. 4200.00</span>
              </div>
              <div className="disc name">
                <span>Discount:</span>
                <span className="disc value">-Rs. 50.00</span>
              </div>
              <div className="total name">
                <span>Total:</span>
                <span className="total value">Rs. 4600.00</span>
              </div>
              <button className="pay-btn">Confirm & Pay</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer" style={{ diplay: "flex" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Checkout;
