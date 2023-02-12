import React from 'react';
import { useTranslation } from 'react-i18next';
import SideBar from '../../Components/SideBar/SideBar';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import defaultUser from '../../Assets/defaultUser.png'
import './Profile.css'

export default function Profile() {
  const { t } = useTranslation();
  return (
    <div style={{ diplay: 'flex', flexDirection: 'column' }}>
      <div className="middle-contaier" style={{ display: "flex" }}>
        <SideBar />
        <div className="mainContainer">
          <Navbar />
          <div className="read-crumb">
            <MDBBreadcrumb >
              <MDBBreadcrumbItem>
                <a href='/'>{t("Overview")}</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>{t("Profile")}</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </div>
          <h5>{t("Profile")}</h5>
          <section >
            <div class="profile-container">
              <div class="row gutters">
                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 ">
                  <div class="card h-100" style={{borderRadius:"10px"}}>
                    <div class="card-body">
                      <div class="account-settings">
                        <div class="user-profile">
                          <div class="user-avatar">
                            <img src={defaultUser} alt="User Profile Picture"/>
                          </div>
                          <h5 class="user-name">Anna Sophia</h5>
                          <h6 class="user-email">annasophia@gmail.com</h6>
                        </div>
                        <div class="about">
                          <h5>{t("About")}</h5>
                          <p>{t("Student")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                  <div class="card h-100" style={{borderRadius:"10px"}}>
                    <div class="card-body">
                      <div class="row gutters">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <h6 class="mb-2 text-primary">{t("Personal Details")}</h6>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="fullName">{t("Full Name")}</label>
                            <input type="text" class="form-control" id="fullName" placeholder="Enter full name"/>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="eMail">{t("Email")}</label>
                            <input type="email" class="form-control" id="eMail" placeholder="Enter email ID"/>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="phone">{t("Phone")}</label>
                            <input type="text" class="form-control" id="phone" placeholder="Enter phone number"/>
                          </div>
                        </div>
                      </div>
                      <div class="row gutters">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <h6 class="mt-3 mb-2 text-primary">{t("Address")}</h6>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="Street">{t("Street")}</label>
                            <input type="name" class="form-control" id="Street" placeholder="Enter Street"/>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="ciTy">{t("City")}</label>
                            <input type="name" class="form-control" id="ciTy" placeholder="Enter City"/>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="sTate">{t("State")}</label>
                            <input type="text" class="form-control" id="sTate" placeholder="Enter State"/>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="zIp">{t("Zip Code")}</label>
                            <input type="text" class="form-control" id="zIp" placeholder="Zip Code"/>
                          </div>
                        </div>
                      </div>
                      <div class="row gutters">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" className="profile-buttons">
                          <div class="text-right">
                            <button type="button" id="submit" name="submit" class="btn btn-secondary">{t("Cancel")}</button>
                            <button type="button" id="submit" name="submit" class="btn btn-primary">{t("Update")}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="footer" style={{ diplay: 'flex' }}>
        <Footer />
      </div>
    </div>

  );
}