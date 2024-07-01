import {Card, ConfigProvider} from 'antd';
function Movies({list}){
    return(
        <>
        <ConfigProvider theme={{token:{colorBgContainer:'#fff486'}}}>
        <Card hoverable style={{ width: 240}} cover={<img alt="poster" src={list.image}/>}>
            <p className="nav-link">{list.title}</p>
            <p className='text'>Released on {list.releasedate}<br/><b>₹{list.ticketPrice}</b></p>
            <button type='button' className='btn btn-basic'>Book Tickets</button>
        </Card>
        </ConfigProvider>     
        </>
    );
}
export default Movies;
