
import React from 'react'
import useSWR from 'swr';

import Link from 'next/link';



// const fetcher = (...args) => fetch(...args).then(res => res.json())


const Lessons = ({topic}) => {
    
    const [lessons, setLessons ] = React.useState([])
    const [loading, setLoading] = React.useState(true);

    
    // const loadJs = () => {
    //   const script = document.createElement('script');
    //   script.src = "/js/plugins/video-playlist.js" ;
    //   script.async = true;
    //   document.body.appendChild(script);
    //   console.log("Hello bhai")
    // }

   React.useEffect(() => {


    let url = process.env.API_URL + 'lesson/lessons/?ordering=order&topic='+topic.id 

      fetch(url)
      .then(async (response) => {
        if (response.ok) {
          var data = await response.json();
          setLessons(data.results);
          setLoading(false);
          // loadJs();

         } else {
          
        }
      }).catch(error=>{  })
  
    }, []);

  if (loading) return <div>loading...</div>
  

  return (
    <nav className="vids">
                {lessons.map((lesson, index) => (
                    <Link  key={index} href={"/lesson/"+lesson.slug}><a>
                       <p>{lesson.name}</p>

                    {lesson.lession_type===0 && <span className="info-icon"><i className="flaticon-play"></i></span>}
                    {lesson.lession_type===1 && <span className="info-icon"><i className="flaticon-coding"></i></span>}
                    {lesson.lession_type===2 && <span className="info-icon"><i className="flaticon-tutor"></i></span>}
                       
                   </a></Link>
                    ))}                    
    </nav>
  )
}

export default Lessons