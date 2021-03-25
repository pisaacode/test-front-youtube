import React, { useState } from 'react'
import { getList } from '../../services/YoutubeService'
import YoutubeEmbed from './embedVideo';



const Videos = () =>{

    const [listVideo, setList] = useState([]);
    const [inputSearch, setSearch] = useState('');

    const clickSearch = () => {
        console.log(inputSearch)
        getList(inputSearch)
           .then(({videos:{items}}) => {
                setList(items)
           })
    }
    return (
        <>
            <div className="mb-3">
                <label className="form-label">Buscar Video</label>
                <input className="form-control" type="text" onChange={ e => setSearch(e.target.value)}/>
            </div>
            <button className="btn btn-primary mb-3" onClick={clickSearch}> Buscar </button>
            {listVideo.map(x => (<YoutubeEmbed embedId={x.id.videoId} key={x.id.videoId}/>))}
        </>
    )
}

export default Videos
