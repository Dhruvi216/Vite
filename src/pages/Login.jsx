import React from 'react'
import { Container, Row, Col, NavLink, Nav } from 'react-bootstrap'
import logo from '../assets/Vector.jpg'
import loginimg from '../assets/image4.jpg'

export default function Login() {
  return (
    <>
      <Container fluid className="login position-relative">
        <Row className="mt-5">
          <Col
            className="bg-danger"
            xxl={6}
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
          >
            <Row>
              <Col
                className="d-flex justify-content-between"
                xxl={12}
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <div className="logo d-flex">
                  <div className="logopic">
                    <div className="logoimg">
                      <img src={logo} alt="logo-img" className="img-fluid" />
                    </div>
                    <div className="ellipse1 rounded"></div>
                    <div className="ellipse2 rounded"></div>
                  </div>
                  <div className="logoname ms-4 mt-2">
                    <h3 className="">Tweet Netra</h3>
                  </div>
                </div>
                {/* ---------------logo----------------- */}
                <div className="createaccount d-flex mt-3 me-3">
                  <h3 className="me-4">Don't have an account?</h3>
                  <h3>
                    <Nav.Link eventKey="link-event-key" className="createlink">
                      Create an account{' '}
                    </Nav.Link>
                  </h3>
                </div>
                {/* --------------- create account----------------- */}
              </Col>
            </Row>
            <Row>
              <Col
                className="container mx-auto bg-warning"
                xxl={9}
                xl={9}
                lg={9}
                md={9}
                sm={9}
                xs={9}
              >
                <div>
                  <h1>Welcome Back</h1>
                </div>
                <div>
                  <p>Welcome back! Please enter Your details below</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className="">
            <div className="mt-1">
              <h1>jdBcyu</h1>
              {/* <img
                src={loginimg}
                alt="login-img"
                className="rounded loginimg"
              /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
