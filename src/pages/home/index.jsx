import React from 'react';
import './style.scss';
import { HomeHeader } from './HomeHeader';
import { Services } from '../../common/Services';
import { Team } from '../../common/Team';
import { MailSender } from '../../business/MailSender';

export const Home = () => {
    return (
        <div className="home_page">
            <HomeHeader />
            <Services />
            <Team />
            <MailSender />
      </div>
    )
}