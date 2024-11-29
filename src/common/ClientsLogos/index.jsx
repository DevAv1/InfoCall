import './style.scss';
import {
    LOGOS_LIST,
    LogosDictionary
 } from './config';

export const ClientsLogos = () => {
    return (
        <div className="clients-logos">
            <span className="clients-logo-title">בין לקוחותינו</span>
            <div className="slider">
                <div className="slide-track">
                    {
                        LOGOS_LIST.map((logo, index) => {
                            return (
                                <div key={`${logo}_${index}`} className="slide">
                                    {LogosDictionary[logo]}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
          
        </div>
    )
}
