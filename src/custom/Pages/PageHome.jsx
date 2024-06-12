import React from 'react'
import HomeCarosel from '../Components/HomeCarosel/HomeCarosel'
import HomeSectionCarosel from '../Components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../Data/mens_kurta'


const PageHome = () => {
  return (
    <div>
        <HomeCarosel />
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarosel data={mens_kurta} sectionName={"POLOS"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"POLERAS"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"CHOMPAS"}/>
        </div>
    </div>
  )
}

export default PageHome
