import { Grid } from '@mui/material'
import React, {useState} from 'react'
import JobCard from '../JobCard/JobCard'
import Search from '../Search/Search'
import vacancyData from '../../../Data/Vacancydata'
import Pagination from '../Pagination/Pagination'


function VacancySection() {
  const [post, setPost] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = vacancyData.slice(firstPostIndex, lastPostIndex);

  const pageCount = Math.ceil(currentPosts.length / postsPerPage);
  const changePage = ({ selected }) => {
    setcurrentPage(selected);
  };

  return (
    <>
      <Grid container justifyContent="center" style={{ width: "100%" }}>
        <Grid item xs={10}>
          <Search />
          {currentPosts.map(({ title, type, company, closingDate }, index) => {
            return <JobCard key={index} title={title} company={company} closingDate={closingDate} type={type}/>
          })}
        </Grid>
        <Pagination
        totalPosts={vacancyData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setcurrentPage}
        currentPage={currentPage}

      />
      </Grid>
    </>
  )
}

export default VacancySection