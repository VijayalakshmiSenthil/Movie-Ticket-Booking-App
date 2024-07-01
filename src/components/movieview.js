import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {Card, ConfigProvider} from 'antd';
import {Row,Col} from 'antd'
import BookTicket from "./bookticket";


function DetailsAboutMovie({handleClick}){
    const [movie,setMovie]=useState({}); 
    const {_id}=useParams()
     useEffect(()=>{
        fetch(`https://backend-crud-one.vercel.app/product/${_id}`)
        .then(response=>response.json())
        .then((response)=> setMovie(response));       
    },[_id])
    
    return(
        <>
        <div className="row-divider"> 
        <Row gutter={50}>
            <Col span={12} >
            <ConfigProvider theme={{token:{colorBgContainer:'#fff486'}}}>
                <Card hoverable style={{ width: 240}} cover={<img alt="poster" src={movie.image}/>}>
                    <p className="nav-link">{movie.title}</p>
                </Card>
            </ConfigProvider>   
            </Col>
            <Col span={12}>
            <p className="title">{movie.title}</p>
            <p className="director">A flim by <b>{movie.director}</b></p>
            <p className="date">Released on {movie.releasedate}</p>
            <BookTicket/>
            <div className="buttons pt-3">
            <button type='button' className='btn btn-basic button' onClick={()=>handleClick(movie)}>Add to Cart</button>
            </div>
            </Col>
        </Row>
        </div>
        <div className="container-fluid pt-5">
            <h4 className="heading">About the Movie</h4>
            <p>{movie.description}</p>
        </div>  

          
        </> 
    );
}
export default DetailsAboutMovie;

