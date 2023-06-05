import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/SideBar/SideBar'
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit'
import { useTranslation } from 'react-i18next'
import './VideosPage.css'
import VideoCard from '../../Components/VideoCard/VideoCard'
import withAuth from '../../hoc/withAuth'

function VideosPage() {
    const { t } = useTranslation();
    const videos = [
        {
          id: 1,
          thumbnail:
            "https://www.dochipo.com/wp-content/uploads/2021/10/YouTube-Thumbnail-_-Education.png",
          title: "Introduction ",
          description: "Introduction to exam",
          videoUrl:"http://techslides.com/demos/sample-videos/small.mp4"
        },
        {
          id: 2,
          thumbnail:
            "https://static-cse.canva.com/blob/1024437/1600w-wK95f3XNRaM.jpg",
          title: "Foundations",
          description: "Foundations of competitive exam",
          videoUrl:"http://techslides.com/demos/sample-videos/small.mp4"

        },
        {
          id: 3,
          thumbnail:
            "https://marketplace.canva.com/EAFDpBugXFA/1/0/1600w/canva-blue-and-yellow-professional-business-youtube-thumbnail-j1_7cGc7ovs.jpg",
          title: "The Basics",
          description: "This is the third video",
          videoUrl:"http://techslides.com/demos/sample-videos/small.mp4"

        },
        {
            id: 4,
            thumbnail: "https://static-cse.canva.com/blob/1024434/1600w-K9NTgBT1uG8.jpg",
            title: "Video 1",
            description: "This is the first lecture video",
            videoUrl:"http://techslides.com/demos/sample-videos/small.mp4"

          },
          {
            id: 5,
            thumbnail: "https://imgv3.fotor.com/images/gallery/Youtube-Thumbnail-Template-for-Business.jpg",
            title: "Video 2",
            description: "This is the second lecture video",
            videoUrl:"http://techslides.com/demos/sample-videos/small.mp4"

          },
          {
            id: 6,
            thumbnail: "https://static-cse.canva.com/blob/1024434/1600w-K9NTgBT1uG8.jpg",
            title: "Video 1",
            description: "This is the first lecture video",
            videoUrl:"http://techslides.com/demos/sample-videos/small.mp4"

          },
          {
            id: 7,
            thumbnail: "https://imgv3.fotor.com/images/gallery/Youtube-Thumbnail-Template-for-Business.jpg",
            title: "Video 2",
            description: "This is the second lecture video",
            videoUrl:"http://techslides.com/demos/sample-videos/small.mp4"

          }
          ,
          {
            id: 6,
            thumbnail: "https://static-cse.canva.com/blob/1024434/1600w-K9NTgBT1uG8.jpg",
            title: "Video 1",
            description: "This is the first lecture video",
            videoUrl:"http://techslides.com/demos/sample-videos/small.mp4"

          },
          {
            id: 7,
            thumbnail: "https://imgv3.fotor.com/images/gallery/Youtube-Thumbnail-Template-for-Business.jpg",
            title: "Video 2",
            description: "This is the second lecture video",
            videoUrl:"http://techslides.com/demos/sample-videos/small.mp4"

          }
      ];
    
  return (
    <div style={{ diplay: 'flex', flexDirection: 'column' }}>
      <div className="middle-contaier" style={{ display: "flex" }}>
        <SideBar />
        <div className="mainContainer">
          <Navbar/>
          <div className="read-crumb">
            <MDBBreadcrumb >
              <MDBBreadcrumbItem>
                <a href='/examinations'>{t("Examinations")}</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>{t("Lecture Videos")}</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </div>
          <h5>{t("Lecture Videos")}</h5>
          <section className='video-section'>
          {videos.map((video) => (
          <div className="col-md-4" key={video.id}>
            <VideoCard
              thumbnail={video.thumbnail}
              title={video.title}
              description={video.description}
              videoUrl={video.videoUrl}
            />
          </div>
        ))}
          </section>
        </div>
      </div>
      <div className="footer" style={{ diplay: 'flex' }}>
        <Footer />
      </div>
    </div>
  )
}

export default withAuth(VideosPage);