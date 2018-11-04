import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import { PanelHeader } from "components";

// import icons from "variables/icons";

class Icons extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={12}>
              <Card>
                <CardHeader> Login </CardHeader>
                <CardBody className="all-icons"> Login Soon </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Icons;
