import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RTE } from '../../components/RTE'

const Blog = () => {

    const getData = (data) => {
        console.log('data =====', data)
        // fetch("https://mukhicorporation.com/thorient/information/about/edit-about", {
        //     method: "POST",
        //     //   headers: { "Content-Type": "application/json" },
        //     body: data,
        // }).then((res) => {
        //     console.log("Request complete! response:", res);
        // });
    }

    return (
        <>
            <Container>
                <div className='mb-3'>
                    <Row >
                        <Col lg={6}>
                            <label htmlFor='title'>Title</label>
                            <input id='title' placeholder='Enter Title' className='blogTitle' />
                        </Col>
                        <Col lg={6}>
                            <label htmlFor='url'>URL</label>
                            <input id='url' width='250px' placeholder='Enter URl' className='blogTitle' />
                        </Col>
                    </Row>
                </div>
                <div className='mb-3'>
                    <Row>
                        <Col lg={12}>
                            <label htmlFor='description' style={{ display: "block", marginBottom: "6px" }}>Description</label>
                            {/* <label htmlFor='description' style={{ display: "block", marginBottom: "6px" }}>Description</label> */}
                            <textarea id='description' placeholder='some text' rows="4" style={{ width: "100%" }} maxLength={10} />
                        </Col>
                    </Row>
                </div>
                <RTE getData={getData} />
            </Container>
        </>
    )
}

export default Blog