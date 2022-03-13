
import React from 'react';
import Lessons from '../../components/Lessons';


const Lesson = ({data}) => {

  const [course, setCourse] = React.useState({});

  const [topics, setTopics] = React.useState([]);

  const [loading, setLoading] = React.useState(true);

  const loadJs = () =>{
    const script = document.createElement('script');
    script.src = "/js/plugins/video-playlist.js" ;
    script.async = true;
    document.body.appendChild(script);
  }



  const loadTopics = (id) => {
      let url = process.env.API_URL + `lession/topics/?course=${id}&ordering=order`
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

  React.useEffect(() => {

    loadJs();
    loadCourse();

  }, []);

  if (loading) return <div>loading...</div>



  return (
    <div className="section">

    {/* <!-- Courses Enroll Wrapper Start --> */}
    <div className="courses-enroll-wrapper">

        {/* <!-- Courses Video Player Start --> */}
        <div className="courses-video-player">

            {/* <!-- Courses Video Container Start --> */}
            <div className="vidcontainer">
                <video id="myvid"></video>

                <div className="video-play-bar">
                    <div className="topControl">
                        <div className="progress">
                            <span className="bufferBar"></span>
                            <span className="timeBar"></span>
                        </div>
                        <div className="time">
                            <span className="current"></span> /
                            <span className="duration"></span>
                        </div>
                    </div>

                    <div className="controllers">
                        <div className="controllers-left">
                            <button className="prevvid disabled" title="Previous video"><i className="icofont-ui-previous"></i></button>
                            <button className="btnPlay" title="Play/Pause video"></button>
                            <button className="nextvid" title="Next video"><i className="icofont-ui-next"></i></button>
                            <button className="sound sound2" title="Mute/Unmute sound"></button>
                            <div className="volume" title="Set volume">
                                <span className="volumeBar"></span>
                            </div>
                        </div>

                        <div className="controllers-right">
                            <button className="btnspeed" title="Video speed"><i className="fa fa-gear"></i></button>
                            <ul className="speedcnt">
                                <li className="spdx50">1.5</li>
                                <li className="spdx25">1.25</li>
                                <li className="spdx1 selected">Normal</li>
                                <li className="spdx050">0.5</li>
                            </ul>
                            <button className="btnFS" title="full screen"></button>
                        </div>
                    </div>
                </div>

                <div className="bigplay" title="play the video">
                    <i className="fa fa-play"></i>
                </div>

                <div className="loading">
                    <div className="spinner-border spinner">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

            </div>
            {/* <!-- Courses Video Container End --> */}

            {/* <!-- Courses Enroll Content Start --> */}
            <div className="courses-enroll-content">

                {/* <!-- Courses Enroll Title Start --> */}
                <div className="courses-enroll-title">
                    <h2 className="title">Finance & Investment Series: Learn to Budget and Calculate Your Net Worth.</h2>
                    {/* <p><i className="icofont-eye-alt"></i> <span>8,350</span> Students are watching</p> */}
                </div>
                {/* <!-- Courses Enroll Title End --> */}


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



                    {/* <!-- Accordion Items Start  --> */}
                    <div className="accordion-item">
                        <button className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                            <p>Lesson-02: Science Fiction & Fantasy: Creating Unique and Powerful Worlds</p>
                            <span className="total-duration">01 hour 48 minutes</span>
                        </button>

                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#videoPlaylist">
                            <nav className="vids">
                                <a className="link" href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119">
                                    <p>09. The Complete Medicine MasterclassName</p>
                                    <span className="total-duration">08 minutes</span>
                                </a>

                                <a className="link" href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119">
                                    <p>10. Standard dummy text ever since the</p>
                                    <span className="total-duration">08 minutes</span>
                                </a>

                                <a className="link" href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119">
                                    <p>11. Printer took a galley of type and scrambled</p>
                                    <span className="total-duration">08 minutes</span>
                                </a>

                                <a className="link" href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119">
                                    <p>12. It to make a type specimen book & break</p>
                                    <span className="total-duration">08 minutes</span>
                                </a>

                                <a className="link" href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4">
                                    <p>13. Survived not only five centuries also the leap</p>
                                    <span className="total-duration">08 minutes</span>
                                </a>

                                <a className="link" href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4">
                                    <p>14. Into typesettingremaining essentially</p>
                                    <span className="total-duration">08 minutes</span>
                                </a>

                                <a className="link" href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4">
                                    <p>15. Unchanged. It was popularised in the 1960s</p>
                                    <span className="total-duration">08 minutes</span>
                                </a>

                                <a className="link" href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4">
                                    <p>16. The release of Letraset sheets containing</p>
                                    <span className="total-duration">08 minutes</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                    {/* <!-- Accordion Items End  --> */}



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
  const url = process.env.API_URL+"lession/lession/"+slug;

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