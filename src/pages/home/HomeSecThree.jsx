import React from 'react';
import '../../styles/home/home_sec_three.css';
import Member from '../../assets/team_members/user.png';
import AmitGridish from '../../assets/team_members/amitGridish.jpg';
import Ben from '../../assets/team_members/ben.jpg';
import Moran from '../../assets/team_members/moran.jpg';
import AmitKamisa from '../../assets/team_members/amitKamisa.jpg';
import Michael from '../../assets/team_members/michael.jpg';
import Esti from '../../assets/team_members/esti.jpg';
import Yitav from '../../assets/team_members/yitav.jpg';
import Barak from '../../assets/team_members/barak.jpg';

export const HomeSecThree = () => {

  return (
    <div className="team">
      <div className="team_title">הצוות שלנו</div>
      <div className="team-wrapper">

        <div className="team-member">
            <img src={AmitGridish}/>
            <div className="team-member-hover-bg"></div>
            <div className="team-desc">
              <div className="team-member-name">עמית גרידיש</div>
              <div className="team-member-position">מנכ"ל</div>
            </div>
        </div>
        
        <div className="team-member">
          <img src={AmitKamisa}/>
          <div className="team-member-hover-bg"></div>
          <div className="team-desc">
            <div className="team-member-name">עמית כמיסה</div>
            <div className="team-member-position">מנהל גיוס והשמה</div>
          </div>
        </div>

        <div className="team-member">
          <img src={Moran}/>
          <div className="team-member-hover-bg"></div>
          <div className="team-desc">
            <div className="team-member-name">מורן שמואלי</div>
            <div className="team-member-position">מנהלת מערך המוקדים </div>
          </div>
        </div>

        <div className="team-member">
          <img src={Yitav}/>
          <div className="team-member-hover-bg"></div>
          <div className="team-desc">
            <div className="team-member-name">ייטב חדד</div>
            <div className="team-member-position">מנהל הדרכה ופיתוח ארגוני</div>
          </div>
        </div>

        <div className="team-member">
          <img src={Ben}/>
          <div className="team-member-hover-bg"></div>
          <div className="team-desc">
            <div className="team-member-name">בן גרידיש</div>
            <div className="team-member-position">מנהל כספים ותפעול</div>
          </div>
        </div>
        
        <div className="team-member">
          <img src={Barak}/>
          <div className="team-member-hover-bg"></div>
          <div className="team-desc">
            <div className="team-member-name">ברק בלסיאנו</div>
            <div className="team-member-position">מנהל מוקד אשדוד</div>
          </div>
        </div>

        <div className="team-member">
          <img src={Esti}/>
          <div className="team-member-hover-bg"></div>
          <div className="team-desc">
            <div className="team-member-name">אסתי קרישבסקי</div>
            <div className="team-member-position">מנהלת מוקד בני ברק</div>
          </div>
        </div>
        <div className="team-member">
            <img src={Michael}/>
            <div className="team-member-hover-bg"></div>
          <div className="team-desc">
            <div className="team-member-name">מיכאל בן דוד</div>
            <div className="team-member-position">מנהל מוקד ירושלים</div>
          </div>
        </div>
      </div>
    </div>
  )
}
