import React from 'react'
import './style.scss';
import { Controller, Scene } from 'react-scrollmagic';
import { DotsBorder } from '../../components/DotsBorder';
import Sales  from '../../assets/moked_mechirot.png';
import Shirut from '../../assets/moked_shirut.png';
import Shimur from '../../assets/moked_shimur.png';
import Shetach from '../../assets/sochen_shetach.png';
import Tech from '../../assets/tech.jpg';
import AI from '../../assets/AI.jpg';
import Icon1 from '../../assets/icon_1.png'
import Icon2 from '../../assets/icon_2.png'
import Icon3 from '../../assets/icon_3.png'
import Icon4 from '../../assets/icon_4.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Services = () => {

  return (
    <div className="services">
      <div id="services_title">השירותים שלנו</div>
      <div className="info_boxes_container" id="box_container">
        <Controller>
          <Scene classToggle="info-box-enter-animation" duration={0}>
            <div className="info_box">
              <div className="info_box_img">
                <LazyLoadImage effect="blur" src={Sales} />
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
          </Scene>
        </Controller>
        <Controller>
          <Scene classToggle="info-box-enter-animation" duration={0}>
          <div className="info_box" >
            <div className="info_box_img">
                <LazyLoadImage effect="blur" src={Shirut} />
              </div>
              <DotsBorder icon={Icon2}/>
              <div className="info_box_content">
                <h2>מוקדי שירות</h2>
                <p>
                  הקפדה על ניהול חווית השירות של לקוחותינו תוך דגש על מדדי שירות ושיפור הטכנולגיות לטובת סגירת מעגל טיפול איכותי ומקצועי.
                </p>
            </div>
          </div>
          </Scene>
        </Controller>
        <Controller>
          <Scene classToggle="info-box-enter-animation" duration={0}>
            <div className="info_box" >
              <div className="info_box_img">
                <LazyLoadImage effect="blur" src={Shimur} />
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
          </Scene>
        </Controller>
        <Controller>
          <Scene classToggle="info-box-enter-animation" duration={0}>
            <div className="info_box">
              <div className="info_box_img">
                <LazyLoadImage effect="blur" src={Shetach} />
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
          </Scene>
        </Controller>
        <Controller>
          <Scene classToggle="info-box-enter-animation" duration={0}>
            <div className="info_box">
              <div className="info_box_img">
                <LazyLoadImage effect="blur" className="tech-img" src={Tech} />
              </div>
              <DotsBorder icon={Icon1}/>
              <div className="info_box_content">
                <h2 >תחליף טכנולוגי לנציגים ונתבים</h2>
                <p>
                  השירות מאפשר מתן מענה טלפוני באמצעות בינה מלאכותית.<br/>
                  מענה מיידי ללא כל זמן המתנה 24/7.
                  שיפור משמעותי של זמני המתנה במוקד,
                  שיטוח תפריטים במענה קולי, העברה ליעד הנכון בצעד אחד בלבד,
                  הגדלת השירות העצמי ללקוח באמצעות דיבור חופשי,
                  יכולת לטפל באותה שיחה במספר בקשות של הלקוח,
                  תמיכה במגוון ערוצי קול וטקסט בטלפון, WHATSAPP,MESSENGER  ועוד..
                </p>
              </div>
            </div>
          </Scene>
        </Controller>
        <Controller>
          <Scene classToggle="info-box-enter-animation" duration={0}>
            <div className="info_box">
              <div className="info_box_img">
                <LazyLoadImage effect="blur" className="AI-img" src={AI} />
              </div>
              <DotsBorder icon={Icon2}/>
              <div className="info_box_content">
                <h2 >מערכת טכנולוגית להגדלת ביקוש למכירות - Pablico</h2>
                <p>
                  המערכת הטכנולוגית מאפשרת ליצור חיבור בין אנשים ובכך להגדיל את כמות הלידים לשרותים ולהגדלת מכירות.
                </p>
              </div>
            </div>
          </Scene>
        </Controller>
      </div>
    </div>
  )
}