import React, { useState } from 'react'
import '../styles/privacypolicy.css'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core';

export const PrivacyPolicy = ({ setModal }) => {
  
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false)
    setModal(false)
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"מידניות פרטיות תקנון האתר"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        <h2>מדניות פרטיות</h2>
        <p>
        אנו שמחים שאתם מבקרים באתרנו ומתעניינים בנו ובשירותים המוצעים על ידי אינפוקול אם.אי. בע"מ (להלן: "אינפוקול"). האתר הינו פלטפורמה מקוונת המספקת לגולשים בו מידע אודות אינפוקול, השירותים המוצעים על ידה לקהל לקוחותיה, וכן עשויה לכלול מידע אודות משרות פנויות באינפוקול ו/או שירותים שמוצעים ע"י לקוחות אינפוקול, באמצעותה. תנאים אלה מסדירים את השימוש באתר האינטרנט של אינפוקול וכל מבקר באתר נחשב כמי שקרא תנאים אלה והסכים לתוכנם. אנא קרא בעיון את תנאי השימוש לפני השימוש באתר ולפני העברת נתונים אישיים (כגון שם, דוא"ל, קורות חיים וכד') לאינפוקול.
 תנאים אלה כתובים בלשון זכר לצורכי נוחות בלבד והם כולל גם פניה בלשון נקבה ו/או רבים, לפי המקרה.
אינפוקול שומרת לעצמה את הזכות לשנות תנאי שימוש אלו ולכן על המבקרים באתר ובאחריותם לבדוק מפעם לפעם אם נעשו בהם שינויים.

        </p>
        <h2>1.	איסוף מידע ושימושים אפשריים</h2>
        <p>
        1.1.	בעת שימוש שאתה עושה באתר (לרבות מסירת מידע באתר באמצעות פניה לאינפוקול ו/או פרסום הודעת גולש), נאסף עליך מידע אישי ומידע לא אישי כדלקמן: <br></br>
1.1.1.	"מידע אישי" – מידע הנמסר על ידי הגולש ביודעין (למשל – בעת משלוח פניה ו/או יצירת קשר עם אינפוקול, או בפרסום הודעת גולש), ומזהה אותו באופן אישי (למשל – שם פרטי ומשפחה, כתובת דוא"ל, קורות חיים וכו').<br></br>
1.1.2.	"מידע שאינו אישי" – מידע אנונימי, סטטיסטי, שנאסף באופן פאסיבי אודות שימוש ו/או הפעלת האתר ע"י הגולש, אשר אינו מזהה את הגולש באופן אישי. למשל – סוג הדפדפן של הגולש, התאריך והשעה בה <br></br>התבצעה כניסה לאתר, מקומות באתר בהן הגולש ביקר, כתובת פרוטוקול האינטרנט של הגולש וכו'.
<br></br>1.2.	בעצם מסירת מידע אישי באתר, הינך מצהיר ומאשר כדלקמן: (א) המידע האישי שמסרת הינו שלך, והינו נכון, ומדויק, ובהתאם לסעיף 11 לחוק הגנת הפרטיות, התשמ"א-1981 ("חוק הגנת הפרטיות"), ידוע לך <br></br>כי לא מוטלת עליך חובה חוקית למסור מידע כלשהוא באתר, לרבות מידע האישי, ואולם ללא מסירתו לא תוכל להשתמש בשירותים המוצעים באתר (ובכלל זה לפרסם הודעת גולש ו/או לפנות לאינפוקול); (ב) הינך נותן הסכמתך מדעת להיכלל במאגר/י מידע (אחד או יותר) של אינפוקול, הרשומ/ים עפ"י חוק אצל רשם מאגרי המידע, ויעשה בו/בהם שימוש בהתאם למטרותיו/הם (וכפי שיעודכנו מעת לעת): ככל שהגולש הוא מועמד לעבודה – נעשה שימוש בפרטיך, כפי שמתקבלים באמצעי מדיה שונים, בין היתר, לצורך בדיקת התאמתך למשרה באינפוקול, וכן לצורך משלוח פניות בדיוור ישיר (ובכלל זה משלוח הצעות עבודה מעת לעת באמצעי מדיה שונים), יצירת ושמירת הקשר איתך; ככל שהגולש הינו לקוח – נעשה שימוש בפרטיך, בין היתר, על מנת להציע לך את השירותים המוצעים על ידי אינפוקול ללקוחותיה (ובכלל זה מתן מידע ומכירה של שירותי צד ג'), וכן על מנת לפנות אליך מעת לעת באמצעי מדיה שונים לצורך מטרות שיווק, מכירה, משלוח פניות בדיוור ישיר, ובכלל זה משלוח חומרים פרסומיים ו/או שיווקיים של אינפוקול ו/או של לקוחותיה (ובכלל זה שירותי צד ג'); (ג) גולש שהינו מועמד לעבודה – מסכים כי אינפוקול תהא רשאית למסור את פרטי הגולש לצד ג', לצורך בחינתם את התאמתו של הגולש לאספקת שירותים עבורו; גולש שהינו לקוח – מסכים כי אינפוקול תהא רשאית למסור את פרטי הגולש ללקוח העסקי של אינפוקול, אשר יספק לגולש את שירות צד ג' הרלבנטי שביחס אליו פנה לאינפוקול. לאינפוקול אין ולא תהיה אחריות לכל שימוש אשר יעשה על ידי אותם צדדים שלישיים בכל מידע אשר ייאסף על ידם אודותיך, ככל שייאסף, לרבות מידע אשר הועבר ו/או יועבר אליהם ו/או אשר נמסר להם ישירות על ידך. מבלי לגרוע מהאמור, אינפוקול תהא רשאית להעביר פרטיך ככל שתידרש לעשות זאת עפ"י דין (לרבות מכח צו שיפוטי).
1.3.	בהתאם לחוק הגנת הפרטיות, אתה זכאי לעיין במידע הקיים עליך במאגר/י המידע של אינפוקול, לבקש לתקנו, למוחקו, לבקש הסרה מרשימת דיוור ישיר וכי פרטיך המצויים במאגר מידע המשמש לשירותי דיוור ישיר (אם וככל שקיים) לא יועברו לצדדים שלישיים, והכל – בהודעה בדוא"ל לאינפוקול לכתובת 			. אינפוקול תפעל בהתאם לחובות המוטלים עליה עפ"י חוק הגנת הפרטיות בעניין זה, ואולם מובהר כי מידע אודותיך אשר נדרש לאינפוקול לצורך ניהול פעילותה העסקית ישמר אצלה לזמן הדרוש עפ"י חוק.
<br></br>
1.4.	מידע לא אישי ישמש את אינפוקול לצרכים תפעוליים ועסקיים שונים (לרבות בחינת מספר המבקרים באתר, פילוח וניתוח הרגלי הגלישה באתר, תיקון תקלות, ניהול האתר וכל מטרה אחרת לשם שיפור פעילות האתר והשירותים מוצעים בו). מאחר ומדובר במידע שלא מאפשר זיהוי אישי של גולש, אינפוקול רשאית לעשות בו שימוש ולהעבירו לצדדים שלישיים ללא כל מגבלה, והגולש מוותר על כל תביעה ו/או טענה ו/או דרישה (כספית או אחרת) כלפי אינפוקול בשל כך.
<br></br>1.5.	האתר עושה שימוש ב-"Cookies" (קוקיס) - קבצים באמצעותם נאסף מידע אנונימי לצורך התפעול  השוטף של האתר, לצורך אימות פרטים, אבטחת מידע וכדי להתאים את השימוש באתר או שירותים הניתנים בו להעדפות האישיות של המשתמש ובכך להקל על הגלישה והשימוש. נוסף על כן, ייתכן שהמידע שייאסף באמצעות הקוקיס ישמש לצורך הצגת מודעות או הצעות לשירותים שונים של אינפוקול או של חברות הקשורות עימה. הקוקיס הם קבצי טקסט הנוצרים עם השימוש באתר, בהנחה שהגדרות המחשב או המכשיר הסלולרי שלך מאפשרות זאת. חלק מהקוקיס יפקעו כאשר תסגור את העמוד או את היישום המפעיל אותו וייתכן שאחרים יישמרו על גבי הזיכרון במכשיר שבשימושך. קבצי הקוקיס מכילים מידע על אופן הגישה לעמוד אינטרנטי ושימוש בו, כגון הגדרות, משך השימוש או החשיפה, עמודים ושירותים מקושרים.
<br></br>1.6.	בנוסף, אינפוקול עשויה לעשות שימוש בכלים כדוגמת "Google Analytics", לצורך איסוף וניתוח תנועות הגולשים באתר (ובכלל זה, כמות גולשים באתר, דרכי הגעה לאתר, דפים נצפים באתר, רזולוציות מסך משתמש וכו'), על מנת לשפר וליעל את האתר, מדידת יעילות פרסומות באתר והתאמת תכנים ומודעות לתנועות גולשים באתר. השימוש ב- "Google Analytics" כפוף לתנאי השימוש ומדיניות הפרטיות של "Google".
        </p>
        <h2>2.	אבטחת נתונים, גישה, מחיקה ותיקון נתונים</h2>
        <p>
        2.1.	ככל שהמשתמשים יתבקשו להזין פרטים אישיים לצורך כניסה לאתר או לחלקים מסויימים בו, הפרטים האישיים יוגנו על ידי סיסמה. כל משתמש יוכל לתקן, לשנות ולמחוק את פרטיו האישיים על-ידי שימוש בסיסמת המשתמש שלו. 
        <br></br>2.2.	הפרטים האישיים נשמרים בסודיות. רק לעובדים מוסמכים של אינפוקול, נותני שירותים ושותפים עסקיים שהסכימו לשמור המידע, תהיה גישה למידע.
        </p>
        <h2>3.	תכני גולשים</h2>
        <p>
        3.1.	ככל שיפורסמו באתר תכני גולשים (להלן: "תכני הגולשים"), ידוע למשתמש שאינפוקול רשאית (אך לא חייבת) לבצע סינון לתכנים ולפרסם אך ורק תכנים אשר לפי שיקול דעתה המוחלט והבלעדי ראויים ומתאימים לפרסום. אין ולא תהיה למשתמש כל טענה כלפי אינפוקול ו/או מי מטעמה לגבי החלטה שלה לפרסם או לא לפרסם את תכני הגולשים.
        <br></br>3.2.	מבלי לגרוע מכלליות האמור לעיל, הרי שהמשתמשים באתר מתחייבים שלא לפרסם ו/או להעלות לאתר ו/או להפעיל באתר ו/או להציג באמצעות האתר כל מידע ו/או תוכנת מחשב ו/או אימרה ו/או תכנים העולים כדי לשון הרע ו/או בלתי מדויקים ו/או פוגעניים ו/או שקריים ו/או מסולפים ו/או בלתי צנועים ו/או פוגעים בקדשי דת ו/או בעלי אופי מיני ו/או מאיימים ו/או גזעניים ו/או בלתי חוקיים ו/או מזיקים ו/או שיש בהם משום פרסומת שאינה של אינפוקול ו/או הנוגעים לקטינים ו/או שיש בהם להביא לזיהויים של קטינים ו/או ליצירת קשר עם קטינים ו/או כל מידע אחר אשר יש בו להפר או לפגוע בזכויות צד שלישי כלשהו (לרבות, אך לא רק, זכויות קניין רוחני או זכות לפרטיות).

        </p>
        <h2>
        4.	זכויות יוצרים
        </h2>
        <p>
        כל זכויות היוצרים והמחברים באתר שייכות לאינפוקול ללא יוצא מן הכלל. חל איסור על העתקת התכנים ועל עשיית שימוש כלשהו בהם ללא הסכמת אינפוקול מראש ובכתב. כמו כן, הזכויות הנוגעות לשם "אינפוקול", ללוגו ולסימנים הגראפיים הנוגעים אליהם ואלה אשר מופיעים באתר, שייכות לאינפוקול ומוגנות על-ידי סימני מסחר רשומים. חל איסור על העתקתם ועל עשיית שימוש בהם ללא הסכמת אינפוקול מראש ובכתב.
        </p>
        <h2>5.	אתרי צד שלישי</h2>
        <p>
        האתר מכיל קישורים לאתרי צד שלישי אשר אינם בשליטת אינפוקול ואינם מכוסים על ידי הודעת פרטיות זו. אינפוקול אינה אחראית לנוהלי הגנת הפרטיות או לתוכן של אתרי צד שלישי, לשימוש בהם ו/או להסתמכות עליהם.
        </p>

        <h2>6.		דברי פרסומת</h2>
        <p>
        ככל שסימנת באתר ו/או בדפי נחיתה כלשהם של אינפוקול (לרבות דפי נחיתה המופעלים ע"י אינפוקול עבור לקוחותיה) כי הינך מסכים לקבל עדכונים מאינפוקול (כולל משלוח הצעות עבודה) ו/או חומרים פרסומיים, הרי שהינך מסכים בזאת כי אינפוקול תשלח אליך מעת לעת הצעות עבודה ו/או חומר פרסומי ו/או שיווקי אודות אינפוקול ו/או השירותים המוצעים על ידה ללקוחותיה באמצעי מדיה שונים (ובכלל זה חומרים פרסומיים ו/או שיווקיים בקשר לשירותי צד ג', שאינפוקול שולחת עבור ו/או בשם לקוחותיה העסקיים), לרבות דוא"ל, SMS, פקס, מע' חיוג אוטומטית והודעות מוקלטות, כאשר הסכמה זו מהווה הסכמה לקבלת דברי פרסומת לפי חוק התקשרות (בזק ושידורים), תשמ"ב-1982. מובהר בזאת כי אתה רשאי לחזור בך מהסכמתך בכל עת באמצעות משלוח בקשה לכתובת  			.
        </p>
        <h1>7.	אחריות</h1>
        <p>
        השימוש באתר הינו באחריותו המלאה של המשתמש. לא תעמוד למשתמש באתר כל טענה, תביעה או דרישה כלפי אינפוקול או מי מטעמה בקשר עם האתר, השירותים הניתנים במסגרתו או תכניו. מבלי לגרוע מכלליות האמור, הרי שאינפוקול לא תישא בכל אחריות לתכני גולשים, לרבות שימוש שיעשה בהם בידי צדדים שלישיים. אינפוקול אינה מתחייבת כי תכני האתר (לרבות תכני הגולשים) יהיו מלאים, נכונים, חוקיים, מדויקים או יהלמו את ציפיות ו/או דרישות המשתמשים. אינפוקול לא תשא באחריות כלשהי בגין תכני האתר ו/או שימוש בהם ו/או הסתמכות עליהם, וקוראת למשתמשים לאמת את דיוקו ואמיתותו של כל מידע המתפרסם באתר טרם עשיית כל שימוש בו. מובהר, למען הסר ספק, כי תכני האתר אינם משום תחליף לייעוץ ו/או לטיפול מקצועי במקום בו הם נדרשים. אינפוקול אינה מתחייבת לשמור על זמינות האתר ו/או זמינות תכני האתר ו/או שירותי האתר.
        </p>
        <h2>8.	קטינים</h2>
        <p>
        אם הינך מתחת לגיל 18, עליך לשוחח עם הוריך או המשגיחים עליך לפני הזנת פרטים אישיים לאתר אינטרנט. אם דבר מה בסעיף זה אינו ברור לך עליך לבקש עזרתם של הוריך או המשגיחים עליך.
        </p>
        <h2>9.	הסכמה</h2>
        <p>
        על ידי דפדוף באתר ותקשורת אלקטרונית עם האתר ועם אינפוקול ועל ידי הזנת פרטים אישיים לאתר זה, הנך מכיר ונותן הסכמתך לעיבוד הפרטים האישיים כמפורט לעיל ולתנאי השימוש באתר.
        </p>

        <h2>10.	שונות</h2>
        <p>אם הוראה ממסמך זה תימצא בלתי חוקית, בטלה או בלתי אכיפה מכל סיבה, הוראה זו תימחק מהמסמך ולא תשפיע על חוקיות ותקפות שאר תנאי והוראות המסמך. על תנאי השימוש באתר יחול הדין הישראלי והם יפורשו לפיו. מקום השיפוט יהיה בבית המשפט המוסמך בתל-אביב בלבד.</p>

        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          קראתי
        </Button>
      </DialogActions>
    </Dialog>
  )
}