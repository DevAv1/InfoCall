import React from 'react'
import '../styles/footer.css'
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="dev-credit">
        <span>Developed by <a href = "mailto: avirevah32@gmail.com">Avi Revah</a> - Web Devloper ©</span>
        </div>
      <div className="footer_wrapper">
        <div className="col">
          <ul>
            <li id="footer_title">אודות</li>
            <Link to="/about"><li className="footer_item">אודות החברה</li></Link>
            <Link to="/about"><li className="footer_item">צוות</li></Link>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li id="footer_title">שירותים</li>
            <Link to="/about"><li className="footer_item">מוקדי מכירות</li></Link>
            <Link to="/about"><li className="footer_item">מוקדי שימור</li></Link>
            <Link to="/about"><li className="footer_item">מוקדי שירות</li></Link>
            <Link to="/about"><li className="footer_item">סוכני שטח</li></Link>
            <Link to="/jobs"><li className="footer_item">משרות</li></Link>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="footer_item" id="footer_title">צור קשר</li>
            <li >המלאכה 23, ראש העין</li>
            <li ><a href="tel:+972-54815117">054-4815117</a></li>
            <li >Amit@infocall.co.il</li>
          </ul>
        </div>
        <div className="col">
          <ul className="footer-call">
            <a href="tel:+972-54815117">
              <li id="footer_title">חייגו אלינו</li>
              <i class="fas fa-phone"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}
