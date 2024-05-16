import React from 'react'
import Back from "../commons/back/Back"
import CoursesCard from './CoursesCard'
import OnlineCourses from './OnlineCourses'

const CourseHome=()=> {
  return (
    <div>
      <Back title='Explore Courses'/>
      <CoursesCard />
      <OnlineCourses />
    </div>
  )
}

export default CourseHome
