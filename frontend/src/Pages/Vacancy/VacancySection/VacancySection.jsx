import { Grid } from '@mui/material'
import React, {useEffect, useState} from 'react'
import JobCard from '../JobCard/JobCard'
import Search from '../Search/Search'
import Pagination from '../Pagination/Pagination'
import axios from 'axios'

function VacancySection() {

  const [vacancy, setVacancy] = useState([]);
  useEffect(() => {
    function getVacancy() {
      axios.get('http://localhost:8000/vacancies').then((res) => {
        // console.log(res.data.existingVacancies);
        setVacancy(res.data.existingVacancies)
      }).catch((err) => {
        alert(err.message)
      })
    }
    getVacancy();
  }, [])

  const [post, setPost] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = vacancy.slice(firstPostIndex, lastPostIndex);
  const pageCount = Math.ceil(currentPosts.length / postsPerPage);
  const changePage = ({ selected }) => {
    setcurrentPage(selected);
  };

  return (
    <>
      <Grid container justifyContent="center" style={{ width: "100%" }}>
        <Grid item xs={10}>
          <Search />
          {currentPosts.map(({ title, type, company, closingDate, district, url}, index) => {
            return <JobCard key={index} title={title} company={company} closingDate={closingDate} type={type} district={district} link={url}/>
          })}
        </Grid>
        <Pagination
        totalPosts={vacancy.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setcurrentPage}
        currentPage={currentPage}
      />
      </Grid>
    </>
  )
}

export default VacancySection