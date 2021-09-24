import React, { useEffect } from 'react'
import '../../styles/jobs/jobs.css'
import { JobsHero } from '../jobs/JobsHero';
import { JobsSecOne } from './JobsSecOne';
export const Jobs = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="jobs">
      <JobsHero />
      <JobsSecOne />
    </div>
  )
}
