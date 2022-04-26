import './crd.css'
import React, { useState,useEffect } from 'react'
import axios from '../../Static/axios'
import {img_url} from '../../Static/Static'
import {API_KEY} from '../../Static/Static'
import YouTube from 'react-youtube';


function Card(props) {
  const [movie, setMovie] = useState([])
  const [url, setUrl] = useState("")
  useEffect(() => {
          axios.get(props.url).then((response)=>{
              // console.log(response.data.results)
              setMovie(response.data.results)
          })
  },[])
  const getId=(id)=>{
    console.log(id)
    console.log("clicked")
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0].key)
      setUrl(response.data.results[0].key)
    })

  }


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
   };
  return (
    <div className='card'>
      <div className='ttl'>
            <h2 className='title'>{props.title}</h2>
            </div>
        <div className='crd1'>
            {
              movie.map((obj)=>{
                return(
                  
                  <img onClick={()=>getId(obj.id)} className='img' src={ movie ? `${img_url+obj.backdrop_path}`:""} alt="" />
                  )
              })
            }



        </div>
        { url &&
                <YouTube videoId={url} opts={opts}  />
              }
    </div>
  )
}

export default Card