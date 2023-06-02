import React from 'react';
import './style.scss';
import Member from '../../assets/team_members/user.png';
import AmitGridish from '../../assets/team_members/amitGridish.jpg';
import Ben from '../../assets/team_members/ben.jpg';
import Moran from '../../assets/team_members/moran.jpg';
import AmitKamisa from '../../assets/team_members/amitKamisa.jpg';
import Michael from '../../assets/team_members/michael.jpg';
import Esti from '../../assets/team_members/esti.jpg';
import Yitav from '../../assets/team_members/yitav.jpg';
import Barak from '../../assets/team_members/barak.jpg';
import Liat from '../../assets/team_members/liat.jpg';
import Limor from '../../assets/team_members/limor.jpg';
import Carmit from '../../assets/team_members/carmit.jpg';
import Shay from '../../assets/team_members/shay.jpg';
import New1 from '../../assets/team_members/new1.png';
import New2 from '../../assets/team_members/new2.png';
import New3 from '../../assets/team_members/new3.png';
import New4 from '../../assets/team_members/new4.png';
import { MemberProfile } from './MemeberProfile';
import { TeamMemberList } from './utils';

export const Team = () => {

  return (
    <div className="team">
      <div className="team_title">הצוות שלנו</div>
      <div className="team-wrapper">
        {
          TeamMemberList.map((item) => (
            <MemberProfile fullName={item.fullName} jobTitle={item.jobTitle} image={item.memberImageKey}/>
          ))
        }


        {/* <div className="team-member">
            <img src={AmitGridish} alt="AmitGridish"/>
            <div className="team-member-hover-bg"></div>
            <div className="team-desc">
              <div className="team-member-name">עמית גרידיש</div>
              <div className="team-member-position">מנכ"ל</div>
            </div>
        </div>
        
        <div className="team-member">
          <img src={AmitKamisa} alt="AmitKamisa" />
          <div className="team-member-hover-bg"></div>
          <div className="team-desc">
            <div className="team-member-name">עמית כמיסה</div>
            <div className="team-member-position">מנהל גיוס והשמה</div>
          </div>
        </div>
        <div className="team-member">
            <img src={Liat} alt="Liat" />
            <div className="team-member-hover-bg"></div>
          <div className="team-desc">
            <div className="team-member-name">לימור אבניאל</div>
            <div className="team-member-position">מנהלת מערך מוקדים</div>
          </div>
        </div>

        <div className="team-member">
          <img src={Yitav} alt="Yitav" />
          <div className="team-member-hover-bg"></div>
          <div className="team-desc">
            <div className="team-member-name">ייטב חדד</div>
            <div className="team-member-position">מנהל הדרכה ופיתוח ארגוני</div>
          </div>
        </div>

        <div className="team-member">
          <img src={Ben}alt="Ben" />
          <div className="team-member-hover-bg"></div>
          <div className="team-desc">
            <div className="team-member-name">בן גרידיש</div>
            <div className="team-member-position">מנהל כספים ותפעול</div>
          </div>
        </div>
        


        <div className="team-member">
            <img src={Carmit} alt="Carmit" />
            <div className="team-member-hover-bg"></div>
          <div className="team-desc">
            <div className="team-member-name">כרמית פיין</div>
            <div className="team-member-position">מנהלת מוקד בני ברק</div>
          </div>
        </div>


        <div className="team-member">
            <img src={Shay}/>
            <div className="team-member-hover-bg"></div>
          <div className="team-desc">
            <div className="team-member-name">שי שוורץ</div>
            <div className="team-member-position">מנהלת מוקד נשר</div>
          </div>
        </div>

        <div className="team-member">
            <img src={New1}/>
            <div className="team-member-hover-bg"></div>
          <div className="team-desc">
            <div className="team-member-name">שי שוורץ</div>
            <div className="team-member-position">מנהלת מוקד נשר</div>
          </div>
        </div>
        <div className="team-member">
            <img src={New2}/>
            <div className="team-member-hover-bg"></div>
          <div className="team-desc">
            <div className="team-member-name">שי שוורץ</div>
            <div className="team-member-position">מנהלת מוקד נשר</div>
          </div>
        </div>
        <div className="team-member">
            <img src={New3}/>
            <div className="team-member-hover-bg"></div>
          <div className="team-desc">
            <div className="team-member-name">שי שוורץ</div>
            <div className="team-member-position">מנהלת מוקד נשר</div>
          </div>
        </div>
        <div className="team-member">
            <img src={New4}/>
            <div className="team-member-hover-bg"></div>
          <div className="team-desc">
            <div className="team-member-name">שי שוורץ</div>
            <div className="team-member-position">מנהלת מוקד נשר</div>
          </div>
        </div> */}
    
        
      </div>
    </div>
  )
}
