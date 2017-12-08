import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import {Card, Col, Navbar, NavItem} from 'react-materialize';

interface MapsProps {
    lat : number,
    lng : number
};

class AnyReactComponent extends React.Component < MapsProps,
any > {
    render() {
        return (

            <Card
                className='blue-grey darken-1 grow'
                style={{
                width: '200px',
                fontSize: '1em'
            }}
                textClassName='white-text'
                title='Card title'
                actions={[ < a href = '#' > This is a link </a>]}>
                I am a very simple card.
            </Card>

        );
    }
}
class DashboardPage extends React.Component < any,
any > {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    render() {
        return (
            <div
                className="row"
                style={{
                height: '100vh',
                fontWeight: 700,
                marginBottom: 0,
                padding: 0
            }}>

                <Navbar style={{width: '100%', padding: 0}} brand="Archis" right>
                    <NavItem >
                        Getting started
                    </NavItem>
                    <NavItem>
                        Compile
                    </NavItem>
                    <NavItem href='components.html'/>
                </Navbar>
                <Col
                    s={4}
                    style={{
                    height: '90%',
                    padding: 10
                }}></Col>
                <Col s={8} style={{
                    height: '90%',
                    padding: 10
                }}>
                    <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
                        <AnyReactComponent lat={49.95} lng={30.33}/>
                        <AnyReactComponent lat={39.95} lng={30.38}/>
                        <AnyReactComponent lat={60.95} lng={30.33}/>
                    </GoogleMapReact>
                </Col>
                <div></div>
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red">
                        <i className="large material-icons">mode_edit</i>
                    </a>
                    <ul>
                        <li>
                            <a className="btn-floating red">
                                <i className="material-icons">insert_chart</i>
                            </a>
                        </li>
                        <li>
                            <a className="btn-floating yellow darken-1">
                                <i className="material-icons">format_quote</i>
                            </a>
                        </li>
                        <li>
                            <a className="btn-floating green">
                                <i className="material-icons">publish</i>
                            </a>
                        </li>
                        <li>
                            <a className="btn-floating blue">
                                <i className="material-icons">attach_file</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default DashboardPage;