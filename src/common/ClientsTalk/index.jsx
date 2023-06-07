import './style.scss';
import { LoogosDictionary } from '../ClientsLogos/config';
import { Controller, Scene } from 'react-scrollmagic';

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
                            <span className="client-comment-description">
                                תגובה ממש ממש ארוכה ומגניבה, וואי איזה יופי אחי ממש חברה מגניבה וטובה
                                תגובה ממש ממש ארוכה ומגניבה, וואי איזה יופי אחי ממש חברה מגניבה וטובה
                                תגובה ממש ממש ארוכה ומגניבה, וואי איזה יופי אחי ממש חברה מגניבה וטובה
                            </span>
                            <div className="client-comment-footer">
                                <span className="client-comment-fullname">אבי רווח - מנהל תפעול</span>
                                <span className="client-comment-company">{LoogosDictionary.HOT}</span>
                            </div>
                        </div>
                    </Scene>
                </Controller>
                <Controller>
                    <Scene duration={0} classToggle="comment-show-animation">
                        <div className="client-comment-card">
                            <span className="client-comment-description">
                                תגובה ממש ממש ארוכה ומגניבה, וואי איזה יופי אחי ממש חברה מגניבה וטובה
                                תגובה ממש ממש ארוכה ומגניבה, וואי איזה יופי אחי ממש חברה מגניבה וטובה
                                תגובה ממש ממש ארוכה ומגניבה, וואי איזה יופי אחי ממש חברה מגניבה וטובה
                            </span>
                            <div className="client-comment-footer">
                                <span className="client-comment-fullname">אבי רווח - מנהל תפעול</span>
                                <span className="client-comment-company">{LoogosDictionary.NEXT}</span>
                            </div>
                        </div>
                    </Scene>
                </Controller>
                <Controller>
                    <Scene duration={0} classToggle="comment-show-animation">
                        <div className="client-comment-card">
                            <span className="client-comment-description">
                                תגובה ממש ממש ארוכה ומגניבה, וואי איזה יופי אחי ממש חברה מגניבה וטובה
                                תגובה ממש ממש ארוכה ומגניבה, וואי איזה יופי אחי ממש חברה מגניבה וטובה
                                תגובה ממש ממש ארוכה ומגניבה, וואי איזה יופי אחי ממש חברה מגניבה וטובה
                            </span>
                            <div className="client-comment-footer">
                                <span className="client-comment-fullname">אבי רווח - מנהל תפעול</span>
                                <span className="client-comment-company">{LoogosDictionary.HOT}</span>
                            </div>
                        </div>
                    </Scene>
                </Controller>
                <Controller>
                    <Scene duration={0} classToggle="comment-show-animation">
                        <div className="client-comment-card">
                            <span className="client-comment-description">
                                תגובה ממש ממש ארוכה ומגניבה, וואי איזה יופי אחי ממש חברה מגניבה וטובה
                                תגובה ממש ממש ארוכה ומגניבה, וואי איזה יופי אחי ממש חברה מגניבה וטובה
                                תגובה ממש ממש ארוכה ומגניבה, וואי איזה יופי אחי ממש חברה מגניבה וטובה
                            </span>
                            <div className="client-comment-footer">
                                <span className="client-comment-fullname">אבי רווח - מנהל תפעול</span>
                                <span className="client-comment-company">{LoogosDictionary.HAREL}</span>
                            </div>
                        </div>
                    </Scene>
                </Controller>

    
            </div>
        </div>
    )
}