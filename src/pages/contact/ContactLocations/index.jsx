import React from "react";
import "./style.scss";

export const ContactLocations = () => {
  return (
    <div className="contact-locations">
      <div className="locations-wrapper">
        <div className="location">
          <i className="fas fa-building"></i>
          <div className="location-title">ראש העין</div>
          <div className="location-address">המלאכה, 23 - מטה</div>
          {/* <div className="location-address">מטה</div> */}
          <div className="location-p-number">074-7077200 </div>
        </div>

        <div className="location">
          <i className="fas fa-map-marker-alt"></i>
          <div className="location-title">בני ברק</div>
          <div className="location-address">רבי עקיבא, 31</div>
          <div className="location-p-number">053-5328882 </div>
        </div>

        <div className="location">
          <i className="fas fa-map-marker-alt"></i>
          <div className="location-title">ירושלים</div>
          <div className="location-address">כנפי נשרים, 35</div>
          <div className="location-p-number">053-5328882</div>
        </div>

        <div className="location">
          <i className="fas fa-map-marker-alt"></i>
          <div className="location-title">אשדוד</div>
          <div className="location-address">האורגים, 11</div>
          <div className="location-p-number">053-5328882</div>
        </div>

        <div className="location">
          <i className="fas fa-map-marker-alt"></i>
          <div className="location-title">נתניה</div>
          <div className="location-address">המלאכה, 8</div>
          <div className="location-p-number">053-5328882</div>
        </div>

        <div className="location">
          <i className="fas fa-map-marker-alt"></i>
          <div className="location-title">ראשל"צ</div>
          <div className="location-address">אצ"ל, 53</div>
          <div className="location-p-number">053-5328882</div>
        </div>

        <div className="location">
          <i className="fas fa-map-marker-alt"></i>
          <div className="location-title">נשר</div>
          <div className="location-address">דרך השלום, 9</div>
          <div className="location-p-number">053-5328882</div>
        </div>
      </div>
    </div>
  );
};
