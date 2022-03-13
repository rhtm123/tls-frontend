
import React from 'react'

import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then(res => res.json())


const Lessons = ({topic}) => {
    
    let url = process.env.API_URL + 'lession/lessions/?ordering=created&topic='+topic.id 
    const { data, error } = useSWR(url, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>



  return (
    <nav className="vids">
                {data.results.map((lession, index) => (
                    <a key={index} className="link" href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119">
                       <p>01. The Complete Medicine MasterclassName</p>
                       <span className="total-duration">08 minutes</span>
                   </a>
                    ))}                    
    </nav>
  )
}

export default Lessons