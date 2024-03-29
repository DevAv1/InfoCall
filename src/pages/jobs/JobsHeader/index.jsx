import React from 'react'
import './style.scss';

export const JobsHeader = () => {
  return (
    <div className="jobs_hero">
      <div className="jobs_hero_container">
        <div className="jobs-banner-img"></div>
        <div className="jobs-banner-text">
          דרושים ומשרות
        </div>
      </div>
      <div className="jobs-banner-text__mobile marked_text">דרושים ומשרות</div>
    </div>
  )
}
