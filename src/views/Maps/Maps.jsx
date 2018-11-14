import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
// react plugin used to create google maps

import { PanelHeader } from "components";
import FormInputs from "../../components/FormInputs/FormInputs";
import CustomButton from "../../components/CustomButton/CustomButton";

class FullScreenMap extends React.Component {
  constructor(props) {
    super(props);
    this.newClick = this.newClick.bind(this);
  }
  newClick() {
    const url = "http://minesitedashboard.herokuapp.com";
    window.open(url, "_blank");
  }
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col lg={12} md={12} sm={12} xs={12} xl={12}>
              <Card>
                <CardHeader> Login </CardHeader>
                <CardBody className="all-icons">
                  <center>
                    <Col lg={12} md={12} sm={12} xs={12} xl={12}>
                      <form>
                        <FormInputs
                          ncols={[
                            "col-md-5 pr-1",
                            "col-md-3 px-1",
                            "col-md-4 pl-1"
                          ]}
                          proprieties={[
                            {
                              label: "Mine Data",
                              inputProps: {
                                type: "text",
                                disabled: true,
                                defaultValue: "Talcher Mine"
                              }
                            },
                            {
                              label: "Username",
                              inputProps: {
                                type: "text",
                                defaultValue: "Piyush"
                              }
                            },
                            {
                              label: "Password",
                              inputProps: {
                                type: "password",
                                placeholder: "password"
                              }
                            }
                          ]}
                        />
                        <a onClick={this.newClick}>
                          <CustomButton color="primary">Login in</CustomButton>
                        </a>
                      </form>
                    </Col>
                  </center>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default FullScreenMap;
