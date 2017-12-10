import * as React from 'react';
import {Button, Col, Row, Icon, Input} from 'react-materialize';
import {Route} from 'react-router-dom';

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

function signUp(history) {
    let formData = new Object();
    // get all input elements from the register form
    let formItems = document.querySelectorAll('.col input');
    for (let i = 0; i < formItems.length; i++) {
        let element = formItems.item(i);
        let attrName = element.attributes['name'].nodeValue;
        let value = element.attributes['value'].nodeValue;
        formData[attrName] = value;
    }
    fetch(`${process.env["REACT_APP_HOST_NAME"]}/users`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then((res) => {
        return res.json();
    }).then((json) => {
        console.log(json);  
        history.push({
            pathname: '/map',
            state: json
        }); 
    });
}

class RegisterPage extends React.Component < any,
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
                                <h1>Archis</h1>
                            </Col>

                            <Col s={6} className="center-align" style={leftColStyle}>
                                <Icon large className="login-icon">done_all</Icon>
                                <Input s={10} label="email" name="email" validate type='email'>
                                    <Icon large className="login-icon">mail_outline</Icon>
                                </Input>
                            </Col>
                        </Row>

                        <Row style={noMarginRow}>
                            <Col s={6}/>
                            <Col s={6} className="center-align" style={leftColStyle}>
                                <Input s={10} type='password' name="password" label="password" validate>
                                    <Icon small className="login-icon">lock_outline</Icon>
                                </Input>
                            </Col>
                        </Row>

                        <Row style={noMarginRow}>
                            <Col s={6}/>
                            <Col s={6} className="center-align" style={leftColStyle}>
                                <Input s={10} name="name" label="real name" validate>
                                    <Icon small className="login-icon">perm_identity</Icon>
                                </Input>
                            </Col>
                        </Row>

                        <Row style={noMarginRow}>
                            <Col s={6}>
                                <h4>Track local issues right now!</h4>
                            </Col>
                            <Col s={6} className="center-align" style={leftColStyle}>
                                <Input s={10} name="profileUrl" label="avatar" validate>
                                    <Icon small className="login-icon">photo_filter</Icon>
                                </Input>
                            </Col>
                        </Row>

                        <Row style={noMarginRow}>
                            <Col s={6}>
                                <Button style={buttonStyle}>Log in</Button>
                            </Col>
                            <Col s={6} className="center-align" style={leftColStyle}>
                                <Route
                                    render={({history}) => (
                                    <Button style={buttonStyle} onClick={() => signUp(history)}>Sign Up</Button>
                                )}/>
                            </Col>
                        </Row>
                    </Row>
                </div>
            </div>
        );
    }
}

export default RegisterPage;