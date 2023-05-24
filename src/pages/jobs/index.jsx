import React, { useEffect } from 'react'
import './style.scss';
import { JobsHeader } from './JobsHeader';
import { JobsPositions } from './JobsPositions';

export const Jobs = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="jobs">
      <JobsHeader />
      <JobsPositions />
    </div>
  )
}
