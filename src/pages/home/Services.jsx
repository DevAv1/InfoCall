import React, { useRef, useEffect, useContext } from 'react'
import '../../styles/home/services.css'
import ScrollMagic from 'scrollmagic';
import { DotsBorder } from '../../components/DotsBorder';
import Sales  from '../../assets/moked_mechirot.png';
import Shirut from '../../assets/moked_shirut.png';
import Shimur from '../../assets/moked_shimur.png';
import Shetach from '../../assets/sochen_shetach.png';
import Icon1 from '../../assets/icon_1.png'
import Icon2 from '../../assets/icon_2.png'
import Icon3 from '../../assets/icon_3.png'
import Icon4 from '../../assets/icon_4.png'

export const Services = () => {

  let item = useRef(null);

  // useEffect(() => {
  //   const controller = new ScrollMagic.Controller();
    
  //   new ScrollMagic.Scene({
  //     triggerElement: '#box_container'
  //   })
  //   .setClassToggle('#box_container', 'fade-in')
  //   .addTo(controller)
  // }, [])

  
  return (
    <div className="services">
      <div id="services_title">השירותים שלנו</div>
      <div className="info_boxes_container" id="box_container">
        <div className="info_box" ref={el => {item = el}}>
          <div className="info_box_img">
            <img src={Sales} />
          </div>
          <DotsBorder icon={Icon1}/>
          <div className="info_box_content">
            <h2>מוקדי מכירות</h2>
            <p >
              חברת InfoCall מתמחה בניהול מכירות על כל רבדיה. <br/>
              החל מבחירת ההון האנושי המתאים, בניית הדרכות, הגדרת יעדים והנעה שוטפת לתוצאות תוך הקפדה על איכות וסגירת מעגל טיפול.
            </p>
          </div>
        </div>
        <div className="info_box" >
          <div className="info_box_img">
            <img src={Shirut} />
          </div>
          <DotsBorder icon={Icon2}/>
          <div className="info_box_content">
            <h2>מוקדי שירות</h2>
            <p>
              הקפדה על ניהול חווית השירות של לקוחותינו תוך דגש על מדדי שירות ושיפור הטכנולגיות לטובת סגירת מעגל טיפול איכותי ומקצועי.
            </p>
          </div>
        </div>
        <div className="info_box" >
          <div className="info_box_img">
            <img src={Shimur} />
          </div>
          <DotsBorder icon={Icon3}/>
          <div className="info_box_content">
            <h2>מוקדי שימור</h2>
            <p>
              בתחרות ההולכת וגוברת על ליבו של הלקוח יש המון סיבות להפסקת התקשרות.
              Infocall בונה תהליך מותאם אישי עם הלקוחות על מנת לאתר ולשפר את תהליכי השימור תוך שימת דגש על רמת שביעות רצון גבוהה במיוחד ועמידה ביעדים.
            </p>
          </div>
        </div>
        <div className="info_box">
          <div className="info_box_img">
            <img src={Shetach} />
          </div>
          <DotsBorder icon={Icon4}/>
          <div className="info_box_content">
            <h2 >סוכני שטח</h2>
            <p>
             ניהול סוכני שטח הוא אחד מהתחומים המורכבים והמאתגרים. <br/>
             ל- InfoCall ניסיון רב בהובלת מערכי שטח לתוצאות,החל מקליטת עובדים מתאימים ועד שלב ביצועים תוך הקפדה על איכות גבוהה.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}