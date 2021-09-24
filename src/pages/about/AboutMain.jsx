import React from 'react'
import '../../styles/about/aboutmain.css'
import { Services } from '../home/Services';
import { HomeSecThree } from '../home/HomeSecThree';

export const AboutMain = () => {
  return (
    <div className="about-main">
      <div className="about-wrapper">
        <div className="about-vision">
          <div className="about-vision-header about-header">החזון</div>
          <div className="about-text">
            בליבת שאיפותינו נמצא החזון שלנו להיות חברת קשרי לקוחות הטובה והמקצועית ביותר בישראל, תוך העמדת סטנדרטים חדשים של שירות יעיל ומקצועי המשלב טכנולוגיה וחדשנות עבור לקוחותינו ועובדינו.
          </div>
        </div>
        <div className="about-ethics">
          <div className="about-ethics-header about-header">הקוד האתי InfoCall</div>
          <div className="about-text">
            אנו בחברת Infocall מחויבים ליצירת סביבת עבודה אתית המבטיחה יושרה, כבוד, חדשנות, חתירה למצוינות והגינות לעובדיה ולקוחותיה.
            הקוד האתי מבטא אמות מידה וכללי התנהגות המשקפים את החזון והערכים שעליהם מושתתת Infocall ובונה את הבסיס לניהול כל עסקינו, מתוך שמירה על עקרונות החוק, המוסר והאתיקה העסקית.
            הקדשנו מחשבה רבה בניסוח כל אחד ואחד מעקרונות הקוד האתי, ואנו רואים בשמירה עליו תנאי הכרחי לקיומנו ולשגשוגנו. הקוד האתי מביע דפוסי פעולה ברורים ומשמש את כל אחד ואחת מעובדי החברה בעשייה היומיומית.
          </div>
        </div>
        <div className="about-main-text">
          <div className="about-text main-text">
            InfoCall מתמחה בהפעלת מגוון רחב של מוקדים טלפונים: מוקדי שירות ומידע, שימור לקוחות, תוך שימת דגש על אפיון תהליכי עבודה, בחירת נציגים איכותיים והתאמת השירות לצורכי הלקוח. <br/>
            על מנת להעניק את השירות הטוב ביותר ללקוחותינו, InfoCall מעמידה לרשות הלקוח צוות מקצועי ומיומן המספק מעטפת הכוללת צוות גיוס, הדרכה והכשרה, מערכות מידע, צוות אנאליסטים וצוות תפעולי וניהולי מנוסה. <br/>
            בעידן בו נושא הטרנספורמציה הדיגיטלית הינה חלק בלתי נפרד מהשיח העסקי, InfoCall משקיעה חשיבה רבה בהכרות עם חווית השירות של הלקוח ומציעה מגוון של פתרונות חכמים. <br/>
            InfoCall מאמינה במערכת יחסים המבוססת על שותפות, מעורבות ושיח פתוח עם לקוחותיה.
          </div>
        </div>
      </div>
      <Services />
      <HomeSecThree />        
    </div>
  )
}
