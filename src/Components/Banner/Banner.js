import React, { useState,useEffect} from 'react'
import './banner.css'
import axios from '../../Static/axios'
import {img_url} from '../../Static/Static'
import {API_KEY} from '../../Static/Static'
import YouTube from 'react-youtube'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
function Banner() {
  const [movie,setMovie] = useState()
  const [uid,setUid] = useState("")
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    axios.get(`/trending/all/day?api_key=${API_KEY}`).then((Response)=>{
      // console.log(Response.data.results[1])
      setMovie(Response.data.results[1])
    })
  }, [])

  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor:'black',
    //bgcolor: 'background.paper',
    //border: '2px solid #000',
    boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px',
    p: 4,
  };

const getMovieId=(id)=>{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results[0].key)
    setUid(response.data.results[0].key)
    handleOpen( )
  })
}
const opts = {
  height: '400',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
 };
 
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? img_url+movie.backdrop_path : ""})`}}>
<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
<Box sx={style}>
        
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         { uid &&
                <YouTube videoId={uid} opts={opts}  />
         }
          </Typography>
        </Box>
</Modal>
        <div className="buttons">
        <button className='btn' onClick={movie ? ()=>getMovieId(movie.id) :""}>Play</button>
        <button className='btn'>My List</button>
        </div>
        <div className='discr'>
            <p>{movie ? movie.overview : ""}</p>
        </div>
        <h1 className='name'>{movie ? movie.title : ""}</h1>
    </div>
  )
}

export default Banner