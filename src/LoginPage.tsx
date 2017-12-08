import * as React from 'react';
import {Button, Col, Row, Icon, Input} from 'react-materialize';

const materialCityBackground = require('./images/material_city.jpg');
const materialPurpleBackground = require('./images/material_background_purple.jpg');

const leftColStyle = {
    color: 'black'
};

const noMarginRow = {
    marginBottom: 0,
    padding: 20
};

const buttonStyle = {
    textTransform: 'none',
    backgroundColor: '#cc3cdb',
    fontWeight: 600
};

class LoginPage extends React.Component < any,
any > {
    render() {
        return (
            <div
                className="valign-wrapper"
                style={{
                height: '100vh',
                background: `url(${materialPurpleBackground})`,
                backgroundSize: 'cover',
                fontWeight: 700
            }}>
                <div
                    style={{
                    background: '#F8F8F8',
                    margin: '0 auto',
                    color: 'white',
                    fontWeight: 500
                }}>
                    <Row
                        style={{
                        border: '1px solid black',
                        marginBottom: 0,
                        background: `url(${materialCityBackground})`,
                        backgroundSize: '50% 100%',
                        boxShadow: '0 0 5px 2px black',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <Row style={noMarginRow}>
                            <Col s={6}>
                                <h1>Social Portal</h1>
                            </Col>

                            <Col s={6} className="center-align" style={leftColStyle}>
                                <h1>Login</h1>
                                <Input s={10} label="email" validate type='email'>
                                    <Icon>email</Icon>
                                </Input>
                            </Col>
                        </Row>

                        <Row style={noMarginRow}>
                            <Col s={6}>
                                <h4>Track local issues right now!</h4>
                            </Col>
                            <Col s={6} className="center-align" style={leftColStyle}>
                                <Input s={10} type='password' label="password" validate>
                                    <Icon>lock</Icon>
                                </Input>
                            </Col>
                        </Row>

                        <Row style={noMarginRow}>
                            <Col s={6}>
                                <Button style={buttonStyle}>Sign Up</Button>
                            </Col>
                            <Col s={6} className="center-align" style={leftColStyle}>
                                <Button style={buttonStyle}>Login In</Button>
                            </Col>
                        </Row>

                    </Row>
                </div>

            </div>
        );
    }
}

export default LoginPage;