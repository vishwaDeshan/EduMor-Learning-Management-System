import React from 'react'
import NewExamCard from '../../../Components/ExamCard/ExamCards'
import RecentAccesExamTable from '../RecentAccessExamTable/RecentAccesExamTable'
import News from '../../../Components/News/News'
import './MiddleSection.css'
import newExamData from '../../../Data/NewExamData'
import { useTranslation } from 'react-i18next'

function MiddleSection() {
    const { t } = useTranslation();
    return (
        <div className="middleSection">
            <div className="title new">
                <h7>{t('New Examination Modules')}</h7>
            </div>
            <div className="newExams" style={{ display: 'flex' }}>
                {/* <NewExamCard className="card" type="card1"/>
                <NewExamCard className="card" type="card2"/>
                <NewExamCard className="card" type="card3"/> */}
                {newExamData.map(({ noOfQuizzes, newExamTitle, image }, index) => {
                    return <NewExamCard key={index} noOfQuizzes={noOfQuizzes} newExamTitle={newExamTitle} examImage={image} />
                })}
            </div>

            <div className="recentExams">
                <div className="title recent">
                    <h7>{t('Recently Accessed Examinations')}</h7>
                </div>
                <div className="recentExamTable">
                    <RecentAccesExamTable />
                </div>
            </div>
            <div className="news">
                <News />
            </div>
        </div>
    )
}

export default MiddleSection