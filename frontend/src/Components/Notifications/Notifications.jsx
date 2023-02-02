import React from "react";
import "./Notifications.css";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { useTranslation } from "react-i18next";

function Notifications() {
  const {t,i18n}=useTranslation();
  return (
    <div className="notifications" style={{ display: "flex" }}>
      <div className="message">{t("You have no notifications")}</div>
      {/* <div className="message">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur nam,
        facere consectetur architecto exercitationem itaque, laboriosam sapiente
        dolorem, eligendi commodi quisquam. Quos quis repudiandae vel?
      </div> */}
      <div className="icon">
        <NotificationsActiveOutlinedIcon />
      </div>
    </div>
  );
}

export default Notifications;
