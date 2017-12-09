import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import {Col, Navbar, NavItem} from 'react-materialize';
import HorizontalCard from './HorizontalCard';

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

interface MapsProps {
    lat : number,
    lng : number
};

interface State {
    pinLat: number,
    pinLng: number
};

class AnyReactComponent extends React.Component < MapsProps,
any> {
    render() {
        return (

            <h1>Boss</h1>

        );
    }
}
class DashboardPage extends React.Component < any,
State > {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    constructor(props: any) {
        super(props);
        this.state = {
            pinLat: 0,
            pinLng: 0
        };
    }

    onClick(event) {
        this.setState({
            pinLat: event.lat,
            pinLng: event.lng
        });
        console.log(event);
    }

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

                <Navbar style={{width: '100%', padding: 0, background: 'purple'}} brand="Archis" right>
                    <NavItem >
                        Getting started
                    </NavItem>
                    <NavItem>
                        Home
                    </NavItem>
                    <NavItem href='components.html'/>
                </Navbar>
                <Col
                    s={4}
                    style={{
                    height: '90%',
                    padding: 10,
                    overflow: 'scroll'
                }}>
                    <HorizontalCard />
                    <HorizontalCard />
                    <HorizontalCard />
                    <HorizontalCard />
                    <HorizontalCard />
                    <HorizontalCard />
                </Col>
                <Col s={8} style={{
                    height: '90%',
                    padding: 10
                }}>
                    <GoogleMapReact bootstrapURLKeys={{key: API_KEY}} onClick={(event) => this.onClick(event)} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
                        <AnyReactComponent lat={60.95} lng={30.33}/>
                        <AnyReactComponent lat={this.state.pinLat} lng={this.state.pinLng} />
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