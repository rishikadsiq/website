import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faPaperPlane,
  faGlobe,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
  return (
    <section className="ftco-section">
      <Container>
        <Row className="justify-content-center">
          {/*<Col md={6} className="text-center mb-5">
            <h2 className="heading-section">Contact Form #06</h2>
  </Col>*/}
        </Row>
        <Row className="justify-content-center" style={{ padding: "20px" }}>
          <Col md={12}>
            <div className="wrapper">
              <Row className="no-gutters mb-5">
                <Col md={7}>
                  <div
                    className="contact-wrap w-100 p-md-5 p-4 "
                    style={{ backgroundColor: "#e8edf0" }}
                  >
                    <h3 className="mb-4">Contact Us</h3>
                    <Form
                      id="contactForm"
                      name="contactForm"
                      className="contactForm"
                    >
                      <Row>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label htmlFor="name">Full Name</Form.Label>
                            <Form.Control
                              type="text"
                              id="name"
                              placeholder="Name"
                              style={{ marginBottom: "1rem" }}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label htmlFor="email">
                              Email Address
                            </Form.Label>
                            <Form.Control
                              type="email"
                              id="email"
                              placeholder="Email"
                              style={{ marginBottom: "1rem" }}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={12}>
                          <Form.Group>
                            <Form.Label htmlFor="subject">Subject</Form.Label>
                            <Form.Control
                              type="text"
                              id="subject"
                              placeholder="Subject"
                              style={{ marginBottom: "1rem" }}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={12}>
                          <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control
                              as="textarea"
                              id="message"
                              rows={4}
                              placeholder="Message"
                              style={{ marginBottom: "1rem" }}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={12}>
                          <Form.Group>
                            <Button variant="primary" type="submit">
                              Send Message
                            </Button>
                            <div className="submitting"></div>
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>

                <Col md={5} className="d-flex align-items-stretch ">
                  <div style={{ width: "100%" }}>
                    <iframe
                      title="Google Map"
                      width="100%"
                      height="520"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Divyabhaskar%20Press,%20B/h,%20nr.%20Railway%20Under%20Bridge,%20Makarba,%20Ahmedabad,%20Gujarat%20380051+(Contact%20Us)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      allowfullscreen
                    ></iframe>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={3}>
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className="text">
                      <p>
                        <span>Address:</span> Divyabhaskar Press, B/h, nr.
                        Railway Under Bridge, Makarba, Ahmedabad, Gujarat 380051
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="text">
                      <p>
                        <span>Phone</span>{" "}
                        <a href="tel://1234567920">+ 1235 2355 98</a>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </div>
                    <div className="text">
                      <p>
                        <span>Email</span>{" "}
                        <a href="https://mail.google.com">
                          <span className="__cf_email__">[mediaamp.co.in]</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span>
                        <FontAwesomeIcon icon={faGlobe} />
                      </span>
                    </div>
                    <div className="text">
                      <p>
                        <span>Website</span>{" "}
                        <a href="www.google.com">MediaAmp.com</a>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactUs;
