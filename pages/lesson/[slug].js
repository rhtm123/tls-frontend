
import React from 'react';
import Lessons from '../../components/Lessons';
import Error from '../../components/Error';

import SolveQuiz from "../../components/SolveQuiz"
import LoginRequired from '../../components/LoginRequired';
import { useSession, signIn, signOut } from "next-auth/react"



const Lesson = ({data, error}) => {

  const [course, setCourse] = React.useState({});

  const [topics, setTopics] = React.useState([]);

  const [loading, setLoading] = React.useState(true);

  const { data: session } = useSession()


  const loadJs = () => {
    const script = document.createElement('script');
    script.src = "/js/plugins/video-playlist.js" ;
    script.async = true;
    document.body.appendChild(script);
  }



  const loadTopics = (id) => {
      let url = process.env.API_URL + `lesson/topics/?course=${id}&ordering=order`
      fetch(url)
      .then(async (response) => {
        if (response.ok) {
          var data = await response.json();
          setTopics(data.results);
          setLoading(false);

         } else {
          
        }
      }).catch(error=>{  })
  }

  const loadCourse = ()=> {

    if (!error){
    let url = process.env.API_URL + 'course/course/'+data.topic.course+"/";
    fetch(url)
    .then(async (response) => {
      if (response.ok) {
        var data = await response.json();
        setCourse(data);
        loadTopics(data.id);
       } else {
        
      }
    }).catch(error=>{  })

}

  }

  React.useEffect(() => {



    loadCourse();
    // loadJs();




  }, [data.id]);

//   if (loading) return <div>loading...</div>


if (error){
    return (<Error />)
  }

  if (!session) {
    return (<LoginRequired />)
}


  return (
    <div className="section">

    {/* <!-- Courses Enroll Wrapper Start --> */}
    <div className="courses-enroll-wrapper">

        {/* <!-- Courses Video Player Start --> */}
        <div className="courses-video-player">

            {/* <!-- Courses Video Container Start --> */}
            <div className="vidcontainer">

                {(data.lession_type===0 && data.video_link) &&
                      <div className='youtubeContainer'>
                        <iframe className='youtubeVideo' src={data.video_link+"?title=0&byline=0&portrait=0"} frameBorder="0" allowFullScreen></iframe>
                      </div>
                    }


                { loading && <div className="loading">
                    <div className="spinner-border spinner">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> }

            </div>
            {/* <!-- Courses Video Container End --> */}

            {/* <!-- Courses Enroll Content Start --> */}
            <div className="courses-enroll-content">

                
                {!data.quiz && <div className="" style={{ paddingTop:24 }}>
                    <h2 >{data.name}</h2>

                    <div  dangerouslySetInnerHTML={{ __html: data.detail }}></div>


                    

                </div> }

                {data.quiz && <div style={{ paddingTop:24 }}>

                    <SolveQuiz quiz={data.quiz} />
                </div>
                
                }
                


            </div>
            {/* <!-- Courses Enroll Content End --> */}
        </div>
        {/* <!-- Courses Video Player End --> */}

        {/* <!-- Courses Video Playlist Start --> */}
        <div className="courses-video-playlist">
            <div className="playlist-title">
                <h3 className="title">Course Content</h3>
                <span>{topics.length} topics</span>
            </div>

            {/* <!-- Video Playlist Start  --> */}
            <div className="video-playlist">
                <div className="accordion" id="videoPlaylist">
                    
                    {topics.map((topic, index) => (
                        
                    <div key={index} className="accordion-item">
                    <button className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${topic.id}`}>
                        <p>{topic.name}</p>
                        {/* <span className="total-duration">01 hour 48 minutes</span> */}
                    </button>

                    <div id={`collapse${topic.id}`} className="accordion-collapse collapse" data-bs-parent="#videoPlaylist">
                        <Lessons topic={topic} />
                    </div>
                </div>

                    ))}



                  



                </div>
            </div>
            {/* <!-- Video Playlist End  --> */}

        </div>
        {/* <!-- Courses Video Playlist End --> */}

    </div>
    {/* <!-- Courses Enroll Wrapper End --> */}

</div>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const {slug} = context.params;
  const url = process.env.API_URL+"lesson/lesson/"+slug;

  const res = await fetch(url)
  const error = res.ok ? false : true
  const data = await res.json()

  return { 
      props: { 
          data:data, error:error
      }
  }
}


Lesson.layout = "L2";

export default Lesson