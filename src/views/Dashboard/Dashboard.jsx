import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Table
} from "reactstrap";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import { PanelHeader, Stats, CardCategory, Tasks } from "components";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import {
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart
} from "variables/charts.jsx";

import { tasks } from "variables/general.jsx";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader
          size="lg"
          content={
            <div>
              <h1 style={{ float: "left", color: "#fff" }}>
                [LOGO]MineSet- For a Greener Odisha
              </h1>
              <h6 style={{ float: "right", color: "#fff" }}>
                Made in Odisha[Logo]
              </h6>
            </div>
          }
        />
        <div className="content">
          <Row>
            <Col xs={12} md={12} lg={12} sm={12}>
              <Carousel>
                <div>
                  <img
                    src="http://pragativadi.com/wp-content/uploads/2017/11/odisha.jpg" 
                    alt="1"
                  />
                  <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img
                    src="http://pragativadi.com/wp-content/uploads/2017/11/odisha.jpg" 
                    alt="1"
                  />
                  <p className="legend">Legend 2</p>
                </div>
                <div>
                  <img
                    src="http://pragativadi.com/wp-content/uploads/2017/11/odisha.jpg" 
                    alt="1"
                  />
                  <p className="legend">Legend 3</p>
                </div>
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
                    <Col xs={12} md={8} lg={8} sm={8}>
                      <h4> Brief Description about Odisha Blah Blah </h4>
                      <p> LoremIpsum wljednasljdnasldnsalkndflksandf </p>
                    </Col>
                    <Col xs={12} md={4} lg={4} sm={4}>
                      <p> Image </p>
                    </Col>
                  </Row>
               </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12} sm={12}>
              <h1>Our Mines & Plants</h1>
              <Carousel>
                <div>
                  <img
                    src="http://pragativadi.com/wp-content/uploads/2017/11/odisha.jpg" 
                    alt="1"
                  />
                  <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img
                    src="http://pragativadi.com/wp-content/uploads/2017/11/odisha.jpg" 
                    alt="1"
                  />
                  <p className="legend">Legend 2</p>
                </div>
                <div>
                  <img
                    src="http://pragativadi.com/wp-content/uploads/2017/11/odisha.jpg" 
                    alt="1"
                  />
                  <p className="legend">Legend 3</p>
                </div>
              </Carousel>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Dashboard;
