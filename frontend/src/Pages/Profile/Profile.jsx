import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SideBar from '../../Components/SideBar/SideBar';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import EditIcon from '@mui/icons-material/Edit';
import defaultUser from '../../Assets/defaultUser.png'
import UserNotFound from '../../Assets/UserNotFound.jpg'
import './Profile.css'

export default function Profile({ isLoggedIn, user, logoutUser }) {
  const { t } = useTranslation();

  const [firstName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZip] = useState("");
  const [birthday, setBirthday] = useState("");

  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (!isLoggedIn) {
      timeoutId = setTimeout(() => {
        setShouldRedirect(true);
      }, 500);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isLoggedIn]);

  useEffect(() => {
    if (shouldRedirect) {
      window.location.replace("/login");
    }
  }, [shouldRedirect]);

  const handleEditPhoto = () => {
    const input = document.createElement("input");
    input.type = "file";

    input.addEventListener("change", () => {
      const file = input.files[0];
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const newProfilePicture = reader.result;

        const userProfilePicture = document.querySelector(".user-avatar img");
        userProfilePicture.src = newProfilePicture;
      });

      reader.readAsDataURL(file);
    });

    input.click();
  }

  return (
    <div style={{ diplay: 'flex', flexDirection: 'column' }}>
      <div className="middle-contaier" style={{ display: "flex" }}>
        <SideBar />
        <div className="mainContainer">
          <Navbar user={user} isLoggedIn={isLoggedIn} />
          <div className="read-crumb">
            <MDBBreadcrumb >
              <MDBBreadcrumbItem>
                <a href='/'>{t("Overview")}</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>{t("Profile")}</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </div>
          <h5>{t("Profile")}</h5>
          {isLoggedIn ? <section >
            <div class="profile-container">
              <div class="row gutters">
                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 ">
                  <div class="card h-100" style={{ borderRadius: "10px" }}>
                    <div class="card-body">
                      <div class="account-settings">
                        <div class="user-profile">
                          <div class="user-avatar" style={{ borderRadius: "10px" }}>
                            <img src={defaultUser} alt="User Profile Picture" />
                            <button className="edit-button" onClick={handleEditPhoto}>
                              <EditIcon />
                            </button>
                          </div>
                          <h5 class="user-name">{user.firstName} {user.lastName}</h5>
                          <h6 class="user-email">{user.email}</h6>
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
                  <div class="card h-100" style={{ borderRadius: "10px" }}>
                    <div class="card-body">
                      <div class="row gutters">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <h6 class="mb-2 text-primary">{t("Personal Details")}</h6>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="fullName">{t("Full Name")}</label>
                            <input type="text" class="form-control" id="fullName" placeholder="Enter full name" onChange={(e) => {
                              setName(e.target.value);
                            }} />
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="eMail">{t("Email")}</label>
                            <input type="email" class="form-control" id="eMail" placeholder="Enter email ID" onChange={(e) => {
                              setEmail(e.target.value);
                            }} />
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="phone">{t("Phone")}</label>
                            <input type="text" class="form-control" id="phone" placeholder="Enter phone number" onChange={(e) => {
                              setPhoneNumber(e.target.value);
                            }} />
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="birthday">{t("birthday")}</label>
                            <input type="date" class="form-control" id="birthday" placeholder="Enter birthday" onChange={(e) => {
                              setBirthday(e.target.value);
                            }} />
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
                            <input type="name" class="form-control" id="Street" placeholder="Enter Street" onChange={(e) => {
                              setStreet(e.target.value);
                            }} />
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="ciTy">{t("City")}</label>
                            <input type="name" class="form-control" id="ciTy" placeholder="Enter City" onChange={(e) => {
                              setCity(e.target.value);
                            }} />
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="sTate">{t("State")}</label>
                            <input type="text" class="form-control" id="sTate" placeholder="Enter State" onChange={(e) => {
                              setState(e.target.value);
                            }} />
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                            <label for="zIp">{t("Zip Code")}</label>
                            <input type="text" class="form-control" id="zIp" placeholder="Zip Code" onChange={(e) => {
                              setZip(e.target.value);
                            }} />
                          </div>
                        </div>
                      </div>
                      <div class="row gutters">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" className="profile-buttons">
                          <div class="text-right">
                            <button type="button" id="submit" name="submit" class="btn btn-secondary">{t("Cancel")}</button>
                            <button type="button" id="submit" name="submit" class="btn btn-primary" >{t("Update")}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text">
                  <button type="button" name="submit" class="btn btn-primary logout-btn" onClick={() => {
                    logoutUser();
                  }}>{t("Logout")}</button>
                </div>
              </div>
            </div>
          </section> : <section className='userNotFound-img'><img src={UserNotFound} alt="User Not Found" /><h1>User is not found!!</h1></section>}
        </div>
      </div>
      <div className="footer" style={{ diplay: 'flex' }}>
        <Footer />
      </div>
    </div>

  );
}