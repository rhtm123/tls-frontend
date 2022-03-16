
import React from 'react'
import useSWR from 'swr'


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


    let url = process.env.API_URL + 'lession/lessions/?ordering=created&topic='+topic.id 

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
                    <a key={index} className="link" href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119">
                       <p>01. The Complete Medicine MasterclassName</p>
                       <span className="total-duration">08 minutes</span>
                   </a>
                    ))}                    
    </nav>
  )
}

export default Lessons