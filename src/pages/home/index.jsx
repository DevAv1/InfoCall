import React from 'react';
import './style.scss';
import { HomeHeader } from './HomeHeader';
import { Services } from '../../common/Services';
import { Team } from '../../common/Team';
import { MailSender } from '../../business/MailSender';
import { ClientsLogos } from '../../common/ClientsLogos';
import { ClientsTalk } from '../../common/ClientsTalk';

export const Home = () => {
    return (
        <div className="home_page">
            <HomeHeader />
            <Services />
            <Team />
            <ClientsTalk />
            <ClientsLogos />
            <MailSender />
      </div>
    )
}