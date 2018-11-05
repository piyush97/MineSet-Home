import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
// react plugin used to create charts
// import { Line, Bar } from "react-chartjs-2";
// function that returns a color based on an interval of numbers
import { PanelHeader } from "components";
import {
  Carousel,
  CarouselCaption,
  CarouselInner,
  CarouselItem,
  View,
  Mask,
  Button,
  CardImage,
  CardText
} from "mdbreact";
import Logo from "MineSetTransparet.png";
import IAM from "imo-logo.png";

class Dashboard extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    // alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    return (
      <div>
        <PanelHeader
          size="lg"
          content={
            <div>
              <h1 style={{ float: "left", color: "#fff" }}>
                MineSet- For a Greener Odisha
              </h1>
              <h6 style={{ float: "right", color: "#fff" }}>
                <img alt="I Am Odisha" src={IAM} />
              </h6>
            </div>
          }
        />
        <div className="content">
          <Row>
            <Col xs={12} md={12} lg={12} sm={12}>
              <Carousel
                activeItem={1}
                length={4}
                showControls={true}
                showIndicators={false}
                className="z-depth-1"
              >
                <CarouselInner>
                  <CarouselItem itemId="1">
                    <View>
                      <img
                        className="d-block w-100"
                        src="https://static2.tripoto.com/media/filter/nxxl/img/63059/TripDocument/1448090804_4868741722_b3d191b6e9_b.jpg"
                        alt="First slide"
                      />
                      <Mask overlay="black-light"></Mask>
                    </View>
                    <CarouselCaption>
                      <h3 className="h3-responsive">Konark Temple</h3>
                      <p>ISKI BURAYIA YAHA LIKHI JAYEGI</p>
                    </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem itemId="2">
                    <View>
                      <img
                        className="d-block w-100"
                        src="https://static2.tripoto.com/media/filter/nxxl/img/63059/TripDocument/1448090804_4868741722_b3d191b6e9_b.jpg"
                        alt="First slide"
                      />
                      <Mask overlay="black-strong"></Mask>
                    </View>
                    <CarouselCaption>
                      <h3 className="h3-responsive">Strong mask</h3>
                      <p>Second text</p>
                    </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem itemId="3">
                    <View>
                      <img
                        className="d-block w-100"
                        src="https://static2.tripoto.com/media/filter/nxxl/img/63059/TripDocument/1448090804_4868741722_b3d191b6e9_b.jpg"
                        alt="First slide"
                      />
                      <Mask overlay="black-slight"></Mask>
                    </View>
                    <CarouselCaption>
                      <h3 className="h3-responsive">Slight mask</h3>
                      <p>Third text</p>
                    </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem itemId="4">
                    <View>
                      <img
                        className="d-block w-100"
                        src="https://static2.tripoto.com/media/filter/nxxl/img/63059/TripDocument/1448090804_4868741722_b3d191b6e9_b.jpg"
                        alt="First slide"
                      />
                      <Mask overlay="black-light"></Mask>
                    </View>
                    <CarouselCaption>
                      <h3 className="h3-responsive">Sopot Beach</h3>
                      <p>Taken june 21th by @mattonit</p>
                    </CarouselCaption>
                  </CarouselItem>
                </CarouselInner>
              </Carousel>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12} sm={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h3"> Welcome To MineSet </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs={12} md={4} lg={4} sm={4}>
                      <h4> Brief Description about Odisha Blah Blah </h4>
                      <p>
                        Odisha (formerly Orissa), an eastern Indian state on the
                        Bay of Bengal, is known for its tribal cultures and its
                        many ancient Hindu temples. The capital, Bhubaneswar, is
                        home to hundreds of temples, notably the
                        intricately-carved Mukteshvara. The Lingaraj Temple
                        complex, dating to the 11th century, is set around
                        sacred Bindusagar Lake. The Odisha State Museum is
                        focused on the area’s history and environment.
                      </p>
                    </Col>
                    <Col xs={12} md={2} lg={2} sm={2}>
                      <img src={Logo} alt="Logo" />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12} sm={12}>
              <h1>Our Mines & Plants</h1>
              {/*
                Length change @Todo
              */}
              <Carousel
                activeItem={1}
                length={1}
                slide={true}
                showControls={false}
                showIndicators={false}
                multiItem
              >
                <CarouselInner>
                  <Row>
                    <Col xs={12} md={3} lg={3} sm={3}>
                      <CarouselItem itemId="1">
                        <Card className="mb-2">
                          <CardImage
                            className="img-fluid"
                            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                          />
                          <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>Working</CardText>
                            <Button color="primary">Button</Button>
                          </CardBody>
                        </Card>
                      </CarouselItem>
                    </Col>
                    <Col xs={12} md={3} lg={3} sm={3}>
                      <CarouselItem itemId="1">
                        <Card className="mb-2">
                          <CardImage
                            className="img-fluid"
                            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                          />
                          <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>Working</CardText>
                            <Button color="primary">Button</Button>
                          </CardBody>
                        </Card>
                      </CarouselItem>
                    </Col>
                    <Col xs={12} md={3} lg={3} sm={3}>
                      <CarouselItem itemId="1">
                        <Card className="mb-2">
                          <CardImage
                            className="img-fluid"
                            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                          />
                          <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>Working</CardText>
                            <Button color="primary">Button</Button>
                          </CardBody>
                        </Card>
                      </CarouselItem>
                    </Col>
                  </Row>
                </CarouselInner>
              </Carousel>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Dashboard;
