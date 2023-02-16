import React from "react";
import './BillingForm.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBRadio,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";

export default function CreditCard() {
  const {t}=useTranslation();
  return (
    <MDBContainer className="py-5 billing-Container">
      <MDBRow>
        <MDBCol md="8" className="mb-4 ">
          <MDBCard className="mb-4 ">
            <MDBCardHeader className="py-3 bg-light">
              <h5 className="mb-0">{t('Biling details')}</h5>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBRow className="mb-4 ">
                <MDBCol>
                  <MDBInput label="First name" id="form1" type="text" />
                </MDBCol>
                <MDBCol>
                  <MDBInput label="Last name" id="form2" type="text" />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Address"
                id="form3"
                type="text"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form4"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Phone"
                id="form5"
                type="number"
              />
              <hr className="my-4" />

              <h5 className="mb-4">{t('Payment')}</h5>

              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="Credit card"
                checked
              />

              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Debit card"
              />

              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Paypal"
                wrapperClass="mb-4"
              />

              <MDBRow>
                <MDBCol>
                  <MDBInput
                    label="Name on card"
                    id="form6"
                    type="text"
                    wrapperClass="mb-4"
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="3">
                  <MDBInput
                    label="Expiration"
                    id="form8"
                    type="text"
                    wrapperClass="mb-4"
                  />
                </MDBCol>
                <MDBCol md="3">
                  <MDBInput
                    label="CVV"
                    id="form8"
                    type="text"
                    wrapperClass="mb-4"
                  />
                </MDBCol>
              </MDBRow>
              <button type="button" class="btn btn-primary">{t('Continue to checkout')}</button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="4" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3 bg-light">
              <h5 className="mb-0">{t('Summary')}</h5>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup flush>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <span className="package-name">{t('Premium Membership')}</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  {t('Products')}
                  <span>$53.98</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  {t('Discount')}
                  <span>$(3.98)</span>
                </MDBListGroupItem>
                <hr className="my-2"></hr>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <div>
                    <strong>{t('Total amount')}</strong>
                    <strong>
                      <p className="mb-0">({t('including VAT')})</p>
                    </strong>
                  </div>
                  <span>
                    <strong>$50.00</strong>
                  </span>
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
