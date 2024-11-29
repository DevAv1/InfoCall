import './style.scss';
import {LogosDictionary} from '../ClientsLogos/config';
import {Controller, Scene} from 'react-scrollmagic';
import circle from '../../assets/mokdwi_mechirot.png'; 
export const ClientsTalk = () => {
    return (
        <div className="clients-talk">
            <div className="clients-talk-header">
                <span>הלקוחות שלנו מספרים...</span>
            </div>
            <div className="clients-talk-comments">
                <Controller>
                    <Scene duration={0} classToggle="comment-show-animation">
                        <div className="client-comment-card">
                            <div className="decorator">
                                <img src={circle} alt="circle"/>
                            </div>
                            <div className="client-comment-header">
                                <span className="client-comment-fullname">נטע  גנצין ולמר</span>
                                <div className="client-comment-job-title">מנהלת אגף שירות</div>
                            </div>
                            <span className="client-comment-description">
                                אינפוקול הם שותפי אמת, המקצועיות שלהם בעולם המוקדים והשירות, הכרת הענף על בוריו וההבנה העסקית המעמיקה שהם מביאים, מייצרים לנו ערך מוסף, ליווי איכותי ומענה מקצועי ושירותי לכל צורך!
                            </span>
                            <div className="client-comment-footer">
                                <span className="client-comment-company">{LogosDictionary.HAREL}</span>
                            </div>
                        </div>
                    </Scene>
                </Controller>
                <Controller>
                    <Scene duration={0} classToggle="comment-show-animation">
                        <div className="client-comment-card">
                            <div className="decorator">
                                <img src={circle} alt="circle"/>
                            </div>
                            <div className="client-comment-header">
                                <span className="client-comment-fullname">מיטל בן שבת</span>
                                <div className="client-comment-job-title">מנהלת אגף שירות</div>
                            </div>
                            <span className="client-comment-description">
                            העבודה המשותפת שלנו החלה לפני כשנתיים,מאז המוקד התמקצע בעולם התוכן והפך לאחד המוקדים המשמעותיים באגף.
                            חברת אינפוקול הנה שותפה עסקית אמיתית, המספקת מקצועיות ברמה גבוהה מאוד, שירותיות ולא פחות חשוב- אמינות!
ההיכרות המעמיקה עם עולמות המוקדים של כלל בעלי התפקידים מהווה יתרון משמעותי, ומייצרת את הערך המוסף והמענה האיכותי לכל צורך שעולה.
                            </span>
                            <div className="client-comment-footer">
                                <span className="client-comment-company">{LogosDictionary.HOT}</span>
                            </div>
                        </div>
                    </Scene>
                </Controller>
                <Controller>
                    <Scene duration={0} classToggle="comment-show-animation">
                        <div className="client-comment-card">
                            <div className="decorator">
                                <img src={circle} alt="circle"/>
                            </div>
                            <div className="client-comment-header">
                                <span className="client-comment-fullname">עמית כץ</span>
                                <div className="client-comment-job-title">מנהל אגף מכירות</div>
                            </div>
                            <span className="client-comment-description">
                          לאחר שנה של עבודה עם חברת אינפוקול
ברצוני לשבח את השותפות העסקית , ההשקעה ,העשייה והגעה לשיאים על בסיס עבודה איכותית .
כן יירבו...
                            </span>
                            <div className="client-comment-footer">
                                <span className="client-comment-company">{LogosDictionary.HOT}</span>
                            </div>
                        </div>
                    </Scene>
                </Controller>
            </div>
        </div>
    )
}