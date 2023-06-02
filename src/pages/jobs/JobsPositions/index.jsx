import React, { useState, useEffect } from "react";
import "./style.scss";
import Checkbox from "@material-ui/core/Checkbox";
import { PrivacyPolicy } from "../../../components/PrivacyPolicy";
import { JobPositionFilter } from "../JobPositionFilter";

export const JobsPositions = () => {
  const [filter, setFilter] = useState(0);
  const [modal, setModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [jobToggle, setJobToggle] = useState([
    {
      id: 0,
      area: 1,
      toggle: false,
    },
    {
      id: 1,
      area: 1,
      toggle: false,
    },
    {
      id: 2,
      area: 1,
      toggle: false,
    },
    {
      id: 3,
      area: 0,
      toggle: false,
    },
    {
      id: 4,
      area: 2,
      toggle: false,
    },
    {
      id: 5,
      area: 1,
      toggle: false,
    },
    {
      id: 6,
      area: 2,
      toggle: false,
    },
  ]);

  useEffect(() => {
    console.log('modal is changes' , modal);
  }, [modal])
  useEffect(() => {
    console.log(`changed filter to ${filter}`);
  }, [filter]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const jobToggleHandler = (id) => {
    setJobToggle([
      ...jobToggle,
      (jobToggle[id].toggle = !jobToggle[id].toggle),
    ]);
  };

  const jobFilter = (f) => {
    setFilter(f);
  };

  return (
    <div className="jobs-list">
      <div className="jobs-list-header">רוצים להצטרף למשפחה?</div>
      <div className="jobs-list-subheader">
        השאירו פרטים לאחת המשרות ונחזור אליכם במידה ורלוונטי
      </div>
      {modal && <PrivacyPolicy setModal={setModal} modal={modal} />}
      <JobPositionFilter jobFilter={jobFilter} filter={filter} />
      <div className="open-jobs">
        {(filter === 0 || filter === 1) &&
          <div className="position" > 
          <div className="position-title-wrapper">
            <div className="position-title">
              דרוש נציג/ת קשרי לקוחות למוקד שירותי בריאות של קופת חולים מובילה בבני
              ברק
            </div>
            <i
              className="fas fa-chevron-circle-down"
              onClick={() => jobToggleHandler(0)}
            ></i>
          </div>
          {jobToggle[0].toggle && (
            <div className="position-description">
              <div className="p-d-title-des-wrapper">
                <div className="p-d-title-des">תיאור משרה</div>
                <ul>
                  <li>עובדי /ות חברה מהיום הראשון.</li>
                  <li>שעות עבודה נוחות - מתאים גם לאמהות</li>
                  <li>משכורות גבוהות</li>
                  <li>ערבי צוות, ימי כיף ונופשי חברה</li>
                  <li>תחרויות, פרסים ופינוקים</li>
                  <li>העבודה בסביבת עבודה משפחתית, מהנה ודינאמית</li>
                </ul>
                <div className="p-d-title-des">דרישות</div>
                <ul>
                  <li>ראש גדול ויצירתיות</li>
                  <li>כושר ביטוי מעולה</li>
                  <li>יכולת עבודה בסביבה ממוחשבת</li>
                </ul>
                <div className="policy">
                  ע"י שליחת קו"ח אני מאשר כי קראתי את{" "}
                  <label
                    className="privacy-text"
                    onClick={() => setModal(!modal)}
                  >
                    מדניות הפרטיות
                  </label>
                </div>
                <label className="policy-agreement">
                  בסימון v אני מאשר כי קראתי את מדיניות הפרטיות
                </label>
                <Checkbox
                  checked={checked}
                  color="default"
                  inputProps={{
                    "aria-label": "checkbox with default color",
                  }}
                  onClick={handleChange}
                />
                <a
                  className={checked ? "apply-btn" : "apply-btn-disabled"}
                  href="mailto:gius@infocall.co.il?subject=הגשת מועמדות - משרה מספר #1000"
                  target="_blank"
                >
                  הגש קו"ח
                </a>
              </div>
            </div>
          )}
          <hr className="job-border" />
        </div>
        }

        {(filter === 0 || filter === 1) &&
          <div className="position">
          <div className="position-title-wrapper">
            <div className="position-title">
              דרוש אחמ"ש למוקד קשרי לקוחות בתחום שירותי בריאות של קופת חולים
              מובילה, בני ברק
            </div>
            <i
              className="fas fa-chevron-circle-down"
              onClick={() => jobToggleHandler(1)}
            ></i>
          </div>
          {jobToggle[1].toggle && (
            <div className="position-description">
              <div className="p-d-title-des-wrapper">
                <div className="p-d-title-des">תאור משרה</div>
                <ul>
                  <li>ניהול זמינות ומשימות של כלל המוקד.</li>
                  <li>אחריות על שעות עבודה במשמרת.</li>
                  <li>תפעול מערכות המחשוב במוקד.</li>
                  <li>אחריות על איתור כשלים ותקלות והעברתם לגורם המטפל.</li>
                  <li>עבודה מול מנהלים במוקד.</li>
                  <li>הנעה והגעה ליעדים.</li>
                  <li>אחריות על דו"חות ותפוקה.</li>
                </ul>
                <div className="p-d-title-des">דרישות</div>
                <ul>
                  <li>ניסיון בניהול משמרת במוקד - חובה</li>
                  <li>ניסיון במוקד שירות/מכירות - חובה</li>
                  <li>כושר ביטוי מעולה בע"פ ובכתב</li>
                  <li>אוריינטציה טכנית גבוה</li>
                  <li>תודעת שירות גבוהה</li>
                  <li>נכונות למשמרות</li>
                  <li>ראש גדול, אחריות, יכולת הובלה והנעה</li>
                </ul>
                <div className="policy">
                  ע"י שליחת קו"ח אני מאשר כי קראתי את{" "}
                  <label
                    className="privacy-text"
                    onClick={() => setModal(!modal)}
                  >
                    מדניות הפרטיות
                  </label>
                </div>
                <label className="policy-agreement">
                  בסימון v אני מאשר כי קראתי את מדיניות הפרטיות
                </label>
                <Checkbox
                  checked={checked}
                  color="default"
                  inputProps={{
                    "aria-label": "checkbox with default color",
                  }}
                  onClick={handleChange}
                />
                <a
                  className={checked ? "apply-btn" : "apply-btn-disabled"}
                  href="mailto:gius@infocall.co.il?subject=הגשת מועמדות - משרה מספר #1001"
                  target="_blank"
                >
                  הגש קו"ח
                </a>
              </div>
            </div>
          )}
          <hr className="job-border" />
        </div>
        }

        {(filter === 0 || filter === 1) &&
          <div className="position">
          <div className="position-title-wrapper">
            <div className="position-title">
              דרוש מנהל צוות למוקד קשרי לקוחות בתחום שירותי בריאות של קופת חולים
              מובילה, בני ברק
            </div>
            <i
              className="fas fa-chevron-circle-down"
              onClick={() => jobToggleHandler(2)}
            ></i>
          </div>
          {jobToggle[2].toggle && (
            <div className="position-description">
              <div className="p-d-title-des-wrapper">
                <div className="p-d-title-des">תאור משרה</div>
                <ul>
                  <li>
                    ניהול הצוות והנעתו - אחריות ישירה על ביצועי הצוות והגעתו
                    לעמידה ביעדים תוך שימת דגש על איכות עבודה.
                  </li>
                  <li>
                    ניהול מקצועי ברמת נציג שיחות משוב, הדרכה ורענונים מקצועיים.
                  </li>
                  <li>טיפול בבעיות פרט, ליווי חניכה אישית.</li>
                  <li>אחריות על בקרה שוטפת והפקת דו"חות.</li>
                </ul>
                <div className="p-d-title-des">דרישות</div>
                <ul>
                  <li>ניסיון במוקד טלפוני כאחמ"ש/ית מנהל/ת צוות.</li>
                  <li>יחסי אנוש מצוינים</li>
                  <li>יכולת הובלה להישגים.</li>
                  <li>יכולת הנעת עובדים.</li>
                </ul>
                <div className="policy">
                  ע"י שליחת קו"ח אני מאשר כי קראתי את{" "}
                  <label
                    className="privacy-text"
                    onClick={() => setModal(!modal)}
                  >
                    מדניות הפרטיות
                  </label>
                </div>
                <label className="policy-agreement">
                  בסימון v אני מאשר כי קראתי את מדיניות הפרטיות
                </label>
                <Checkbox
                  checked={checked}
                  color="default"
                  inputProps={{
                    "aria-label": "checkbox with default color",
                  }}
                  onClick={handleChange}
                />
                <a
                  className={checked ? "apply-btn" : "apply-btn-disabled"}
                  href="mailto:gius@infocall.co.il?subject=הגשת מועמדות - משרה מספר #1002"
                  target="_blank"
                >
                  הגש קו"ח
                </a>
              </div>
            </div>
          )}
          <hr className="job-border" />
        </div>
        }
        {(filter === 0 || filter === 1) &&
          <div className="position">
          <div className="position-title-wrapper">
            <div className="position-title">
              דרוש /ה מנהלי /ות מוקד קשרי לקוחות למוקד שירותי בריאות של קופת חולים מובילה בבני ברק
            </div>
            <i
              className="fas fa-chevron-circle-down"
              onClick={() => jobToggleHandler(3)}
            ></i>
          </div>
          {jobToggle[3].toggle && (
            <div className="position-description">
              <div className="p-d-title-des-wrapper">
                <div className="p-d-title-des">תאור משרה</div>
                <ul>
                  <li>
                   אחריות כוללת על כ 40 נציגים.
                  </li>
                  <li>
                  אחריות להובלת המוקד לעמידה ביעדים ולהישגים.
                  </li>
                  <li>שיפור והטמעת שיטות עבודה, נהלים, בקרות ושגרות יום.</li>
                  <li>אחריות על תחום ההכשרה וההדרכה לעובדים חדשים וותיקים.</li>
                  <li>עבודה עם מערכות מידע, הפקת דוחות, נתונים, לצורך הסקת מסקנות ובניית תוכניות פעולה.</li>
                  <li>חריות על גיוס עובדים – בשיתוף עם מנהל הגיוס בחברה.</li>
                  <li>משרה מלאה, עם נכונות לשעות נוספות.</li>
                </ul>
                <div className="p-d-title-des">דרישות</div>
                <ul>
                  <li>ניסיון בניהול מוקד שירות/מכירות טלפוני בסדר גודל בינוני - יתרון.</li>
                  <li>ניסיון בניהול מוקד קשרי לקוחות בתחום הבריאות- יתרון.</li>
                  <li>ניסיון בניהול מנהלים – יתרון.</li>
                  <li>תואר ראשון - יתרון משמעותי.</li>
                  <li>יכולות קריאה וניתוח נתונים, ניסיון עבודה עם מערכות מידע- חובה.</li>
                  <li> אנו מחפשים שחקן/ית קבוצתית, בעל/ת יחסי אנוש טובים, עם יכולת רתימה והובלה של העובדים להישגים בשיטות חדשות ומובילות, נעימות ואסרטיביות כאחד. </li>
                </ul>
                <div className="policy">
                  ע"י שליחת קו"ח אני מאשר כי קראתי את{" "}
                  <label
                    className="privacy-text"
                    onClick={() => setModal(!modal)}
                  >
                    מדניות הפרטיות
                  </label>
                </div>
                <label className="policy-agreement">
                  בסימון v אני מאשר כי קראתי את מדיניות הפרטיות
                </label>
                <Checkbox
                  checked={checked}
                  color="default"
                  inputProps={{
                    "aria-label": "checkbox with default color",
                  }}
                  onClick={handleChange}
                />
                <a
                  className={checked ? "apply-btn" : "apply-btn-disabled"}
                  href="mailto:gius@infocall.co.il?subject=הגשת מועמדות - משרה מספר #1003"
                  target="_blank"
                >
                  הגש קו"ח
                </a>
              </div>
            </div>
          )}
          <hr className="job-border" />
        </div>
        }
         {(filter === 0 || filter === 4) &&
          <div className="position" > 
          <div className="position-title-wrapper">
            <div className="position-title">
              דרוש נציג/ת קשרי לקוחות למוקד שירותי בריאות של קופת חולים מובילה בירושלים
            </div>
            <i
              className="fas fa-chevron-circle-down"
              onClick={() => jobToggleHandler(6)}
            ></i>
          </div>
          {jobToggle[6].toggle && (
            <div className="position-description">
              <div className="p-d-title-des-wrapper">
                <div className="p-d-title-des">תיאור משרה</div>
                <ul>
                  <li>עובדי /ות חברה מהיום הראשון.</li>
                  <li>שעות עבודה נוחות - מתאים גם לאמהות</li>
                  <li>משכורות גבוהות</li>
                  <li>ערבי צוות, ימי כיף ונופשי חברה</li>
                  <li>תחרויות, פרסים ופינוקים</li>
                  <li>העבודה בסביבת עבודה משפחתית, מהנה ודינאמית</li>
                </ul>
                <div className="p-d-title-des">דרישות</div>
                <ul>
                  <li>ראש גדול ויצירתיות</li>
                  <li>כושר ביטוי מעולה</li>
                  <li>יכולת עבודה בסביבה ממוחשבת</li>
                </ul>
                <div className="policy">
                  ע"י שליחת קו"ח אני מאשר כי קראתי את{" "}
                  <label
                    className="privacy-text"
                    onClick={() => setModal(!modal)}
                  >
                    מדניות הפרטיות
                  </label>
                </div>
                <label className="policy-agreement">
                  בסימון v אני מאשר כי קראתי את מדיניות הפרטיות
                </label>
                <Checkbox
                  checked={checked}
                  color="default"
                  inputProps={{
                    "aria-label": "checkbox with default color",
                  }}
                  onClick={handleChange}
                />
                <a
                  disabled
                  className={checked ? "apply-btn" : "apply-btn-disabled"}
                  href="mailto:gius@infocall.co.il?subject=הגשת מועמדות - משרה מספר #2001"
                  target="_blank"
                >
                  הגש קו"ח
                </a>
              </div>
            </div>
          )}
          <hr className="job-border" />
        </div>
        }
        {(filter === 0 || filter === 4) &&
          <div className="position">
          <div className="position-title-wrapper">
            <div className="position-title">
              דרוש /ה מנהלי /ות מוקד קשרי לקוחות למוקד שירותי בריאות של קופת חולים מובילה לירושלים
            </div>
            <i
              className="fas fa-chevron-circle-down"
              onClick={() => jobToggleHandler(4)}
            ></i>
          </div>
          {jobToggle[4].toggle && (
            <div className="position-description">
              <div className="p-d-title-des-wrapper">
                <div className="p-d-title-des">תאור משרה</div>
                <ul>
                  <li>
                   אחריות כוללת על כ 40 נציגים.
                  </li>
                  <li>
                  אחריות להובלת המוקד לעמידה ביעדים ולהישגים.
                  </li>
                  <li>שיפור והטמעת שיטות עבודה, נהלים, בקרות ושגרות יום.</li>
                  <li>אחריות על תחום ההכשרה וההדרכה לעובדים חדשים וותיקים.</li>
                  <li>עבודה עם מערכות מידע, הפקת דוחות, נתונים, לצורך הסקת מסקנות ובניית תוכניות פעולה.</li>
                  <li>חריות על גיוס עובדים – בשיתוף עם מנהל הגיוס בחברה.</li>
                  <li>משרה מלאה, עם נכונות לשעות נוספות.</li>
                </ul>
                <div className="p-d-title-des">דרישות</div>
                <ul>
                  <li>ניסיון בניהול מוקד שירות/מכירות טלפוני בסדר גודל בינוני - יתרון.</li>
                  <li>ניסיון בניהול מוקד קשרי לקוחות בתחום הבריאות- יתרון.</li>
                  <li>ניסיון בניהול מנהלים – יתרון.</li>
                  <li>תואר ראשון - יתרון משמעותי.</li>
                  <li>יכולות קריאה וניתוח נתונים, ניסיון עבודה עם מערכות מידע- חובה.</li>
                  <li> אנו מחפשים שחקן/ית קבוצתית, בעל/ת יחסי אנוש טובים, עם יכולת רתימה והובלה של העובדים להישגים בשיטות חדשות ומובילות, נעימות ואסרטיביות כאחד. </li>
                </ul>
                <div className="policy">
                  ע"י שליחת קו"ח אני מאשר כי קראתי את{" "}
                  <label
                    className="privacy-text"
                    onClick={() => setModal(!modal)}
                  >
                    מדניות הפרטיות
                  </label>
                </div>
                <label className="policy-agreement">
                  בסימון v אני מאשר כי קראתי את מדיניות הפרטיות
                </label>
                <Checkbox
                  checked={checked}
                  color="default"
                  inputProps={{
                    "aria-label": "checkbox with default color",
                  }}
                  onClick={handleChange}
                />
                <a
                  className={checked ? "apply-btn" : "apply-btn-disabled"}
                  href="mailto:gius@infocall.co.il?subject=הגשת מועמדות - משרה מספר #2000"
                  target="_blank"
                >
                  הגש קו"ח
                </a>
              </div>
            </div>
          )}
          <hr className="job-border" />
        </div>
        }

        {filter <= 5 && (
          <div className="position">
            <div className="position-title-wrapper">
              <div className="position-title">
                דרוש מנהלי אזור שטח לקידום הצמיחה והשירות בכל הארץ
              </div>
              <i
                className="fas fa-chevron-circle-down"
                onClick={() => jobToggleHandler(5)}
              ></i>
            </div>
            {jobToggle[5].toggle && (
              <div className="position-description">
                <div className="p-d-title-des-wrapper">
                  <div className="p-d-title-des">תאור משרה</div>
                  <ul>
                    <li>הדרכות לקידום הצמיחה, השימור והשרות במרפאות המחוז</li>
                    <li>חיזוק איזורי צמיחה ושימור במחוז</li>
                    <li>ניהול יעדים ומדדים ברמה יומית חודשית, מצטברת</li>
                    <li>מענה מקצועי בתחום שירות וצמיחה לעובדי המרפאות במחוז</li>
                  </ul>
                  <div className="p-d-title-des">דרישות</div>
                  <ul>
                    <li>עמידה ביעדי צמיחה ושימור</li>
                    <li>עמידה ביעד שביעות רצון לקוחות</li>
                    <li>ידע בניהול תוכניות עבודה, ניתוח תוצאות והפקת לקחים</li>
                    <li>ניסיון בקשרי לקוחות פרונטלית - חובה</li>
                    <li>רקע בהדרכות</li>
                    <li>תודעות שירות גבוהה</li>
                    <li>יכולת גבוהה בהנעת עובדים</li>
                  </ul>
                  <div className="policy">
                    ע"י שליחת קו"ח אני מאשר כי קראתי את{" "}
                    <label
                      className="privacy-text"
                      onClick={() => setModal(!modal)}
                    >
                      מדניות הפרטיות
                    </label>
                  </div>
                  <label className="policy-agreement">
                    בסימון v אני מאשר כי קראתי את מדיניות הפרטיות
                  </label>
                  <Checkbox
                    checked={checked}
                    color="default"
                    inputProps={{ "aria-label": "checkbox with default color" }}
                    onClick={handleChange}
                  />
                  <a
                    className={checked ? "apply-btn" : "apply-btn-disabled"}
                    href="mailto:gius@infocall.co.il?subject=הגשת מועמדות - משרה מספר #0001"
                    target="_blank"
                  >
                    הגש קו"ח
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
