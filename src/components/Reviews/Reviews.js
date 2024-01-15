import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "../Reviews/Reviews.css";

export default function Reviews() {
  return (
    <div className="review-section">
      <h1 id="reviews-title">Reviews</h1>
      <Container>
        <Row id="card-row-1">
          <Col>
            <Card className="shadow-sm bg-white rounded review-cards">
              <Card.Header className="review-card-header">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </Card.Header>
              <Card.Body className="review-card-body">
                <Row>
                  <Col>
                    <Card.Title className="review-card-title">
                      Jim C.
                    </Card.Title>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card.Text className="review-card-text">
                      Highly recommended. Had entire house upgraded... new
                      outlets/switches, new recessed cans and upgrade of older
                      cans to LED, ceiling fans and new exterior lighting and
                      basement lighting repair done. Team was professional and
                      timley and came in on budget. Highly Recommeded!
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-sm bg-white rounded review-cards">
              <Card.Header className="review-card-header">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </Card.Header>
              <Card.Body className="review-card-body">
                <Row>
                  <Col>
                    <Card.Title className="review-card-title">Lc S.</Card.Title>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card.Text className="review-card-text">
                      Needed an electrician in a hurry and my friend highly
                      recommended them so I gave them a call. Super friendly,
                      reasonable pricing and will be using again.
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row id="card-row-2">
          <Col>
            <Card className="shadow-sm bg-white rounded review-cards">
              <Card.Header className="review-card-header">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </Card.Header>
              <Card.Body className="review-card-body">
                <Row>
                  <Col>
                    <Card.Title className="review-card-title">
                      Olivia H.
                    </Card.Title>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card.Text className="review-card-text">
                      I needed help adding a few outlets in our basement, as
                      well as adding a fan to our daughters roome and upgrading
                      some lights throughout our house. We were recommended
                      Master Electric through a local neighborhood Facebook
                      group and will absolutely continue to recommend! Master
                      Electric was timley, professional, and great at staying on
                      budget. if you need any sort of electric work, don't
                      hestistae to reach out this company! you will not be
                      disappointed!
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-sm bg-white rounded review-cards">
              <Card.Header className="review-card-header">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </Card.Header>
              <Card.Body className="review-card-body">
                <Row>
                  <Col>
                    <Card.Title className="review-card-title">
                      Shane S.
                    </Card.Title>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card.Text className="review-card-text">
                      Was punctual and fair on price. we were having our rental
                      property remodeled did a fantastic job will be using for
                      future projects.
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
