import React from "react";
import "./style.scss";
import Demo from "../../../assets/team_members/new1.png";
import { TeamMemberDictionary } from "../utils";

export const MemberProfile = ({ fullName, jobTitle, image }) => {
  return (
    <div className="member-profile">
      <div className="memeber-card-container">
        <div className="member-profile-image">
          {TeamMemberDictionary[image]}
        </div>
        <div className="member-description-container">
          <div className="member-name">{fullName}</div>
          <div className="job-label">{jobTitle}</div>
        </div>
      </div>
    </div>
  );
};
