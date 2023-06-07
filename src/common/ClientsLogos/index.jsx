import './style.scss';
import {
    LOGOS_LIST,
    LoogosDictionary
 } from './config';
import { DotsBorder } from '../../components/DotsBorder';
import Icon1 from '../../assets/icon_1.png';

export const ClientsLogos = () => {
    return (
        <div className="clients-logos">
            <DotsBorder icon={Icon1}/>
            <div className="slider">
                <div className="slide-track">
                    {
                        LOGOS_LIST.map((logo, index) => {
                            return (
                                <div key={`${logo}_${index}`} className="slide">
                                    {LoogosDictionary[logo]}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
          
        </div>
    )
}
