import { useEffect, useState } from "react";
import Movies from "./movies";
import { Row, Col } from 'antd';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Movie() {
    const [record, setRecord] = useState([]);

    useEffect(() => {
        fetch("https://backend-crud-one.vercel.app/product")
            .then(response => response.json())
            .then(data => setRecord(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <Container>
            <Row>
                {record.map((list) => (
                    <Col span={8} key={list._id}>
                        <ul className="movies">
                            <li>
                                <Link to={`/movieview/${list._id}`}>
                                    <Movies list={list} />
                                </Link>
                            </li>
                        </ul>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Movie;
