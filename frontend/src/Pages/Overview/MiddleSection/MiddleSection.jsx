import React, { useEffect, useState } from 'react'
import NewExamCard from '../../../Components/ExamCard/ExamCards'
import RecentAccesExamTable from '../RecentAccessExamTable/RecentAccesExamTable'
import News from '../../../Components/News/News'
import './MiddleSection.css'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

function MiddleSection() {
    const { t } = useTranslation();
    const [exams, setExams] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/examinations')
          .then(response => {
            const sortedExams = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            const recentExams = sortedExams.slice(0, 3);
            setExams(recentExams);
          })
          .catch(error => {
            alert(error.message);
          });
      }, []);

    return (
        <div className="middleSection">
            <div className="title new">
                <h7>{t('New Examination Modules')}</h7>
            </div>
            <div className="newExams" style={{ display: 'flex' }}>
                {exams.map((exams, index) => {
                    return <NewExamCard key={exams.index} newExamTitle={exams.examName} examImage={exams.photo} />
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