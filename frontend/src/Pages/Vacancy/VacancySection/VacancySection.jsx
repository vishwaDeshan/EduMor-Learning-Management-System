import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import JobCard from '../JobCard/JobCard';
import Search from '../Search/Search';
import Pagination from '../Pagination/Pagination';
import axios from 'axios';

function VacancySection() {
  const [vacancy, setVacancy] = useState([]);
  const [filteredVacancy, setFilteredVacancy] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);

  useEffect(() => {
    axios
      .get('http://localhost:8000/vacancies')
      .then((res) => {
        setVacancy(res.data.existingVacancies);
        setFilteredVacancy(res.data.existingVacancies);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const applyFilters = (filters) => {
    let filtered = vacancy;
    if (filters.jobType !== 'All') {
      filtered = filtered.filter((job) => job.type === filters.jobType);
    }
    if (filters.district !== 'All') {
      filtered = filtered.filter((job) => job.district === filters.district);
    }
    setFilteredVacancy(filtered);
  };
  


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredVacancy.slice(firstPostIndex, lastPostIndex);
  const pageCount = Math.ceil(filteredVacancy.length / postsPerPage);

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <Grid container justifyContent="center" style={{ width: '100%' }}>
        <Grid item xs={10}>
          <Search onSearch={applyFilters} />
          {currentPosts.length === 0 ? (
            <p style={{textAlign:"center", color:"grey",marginTop:"200px"}}>No records found</p>
          ) : (
            currentPosts.map(({ title, type, company, closingDate, district, url }, index) => {
              return <JobCard key={index} title={title} company={company} closingDate={closingDate} type={type} district={district} link={url} />;
            })
          )}
        </Grid>
        <Pagination
          totalPosts={filteredVacancy.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          pageCount={pageCount}
          onChange={changePage}
        />
      </Grid>
    </>
  );
}

export default VacancySection;
