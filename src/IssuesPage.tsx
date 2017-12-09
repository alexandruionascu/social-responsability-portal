import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import {
    Button,
    Col,
    Input,
    Modal,
    Navbar,
    NavItem,
    Row
} from 'react-materialize';
import HorizontalCard from './HorizontalCard';

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

const PIN_SIZE = 48;
interface MapsProps {
    lat : number,
    lng : number
};

interface State {
    pinLat : number,
    pinLng : number
};

class AnyReactComponent extends React.Component < MapsProps,
any > {
    render() {
        return (
            <i
                className="material-icons"
                style={{
                color: 'purple',
                fontSize: PIN_SIZE * 2,
                position: 'absolute',
                left: -PIN_SIZE,
                top: -PIN_SIZE
            }}>my_location</i>
        );
    }
}
class IssuesPage extends React.Component < any,
State > {
    static defaultProps = {
        center: {
            lat: 45.74,
            lng: 21.23
        },
        zoom: 11
    };

    constructor(props : any) {
        super(props);
        this.state = {
            pinLat: 45.74,
            pinLng: 21.23
        };
        if (navigator.geolocation) {
            navigator
                .geolocation
                .getCurrentPosition((position) => {
                    console.log(position);
                    this.setState({pinLat: position.coords.latitude, pinLng: position.coords.longitude});
                });
        }
    }

    onClick(event) {
        this.setState({pinLat: event.lat, pinLng: event.lng});
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

                <Navbar
                    style={{
                    width: '100%',
                    padding: 0,
                    background: 'purple'
                }}
                    brand="Archis"
                    right>

                    <Modal
                        header='Submit an issue'
                        style={{
                        background: 'purple',
                        color: 'white',
                        overflow: 'hidden'
                    }}
                        options={{
                        dissmisable: true
                    }}
                        actions={<span/>}
                        bottomSheet
                        trigger={<NavItem> Submit issue </NavItem>}>
                        <Row>
                            <Input s={2} label="description"/>
                            <Input s={2} label="image url"/>
                        </Row>
                        <Button style={{
                            background: 'white',
                            color: 'purple',
                            fontWeight: 700,
                            textTransform: 'none'
                        }}>Confirm</Button>
                    </Modal>
                    <NavItem href='components.html'/>
                </Navbar>
                <Col
                    s={4}
                    style={{
                    height: '90%',
                    padding: 10,
                    overflow: 'scroll'
                }}>
                    <HorizontalCard/>
                    <HorizontalCard/>
                    <HorizontalCard/>
                    <HorizontalCard/>
                    <HorizontalCard/>
                    <HorizontalCard/>
                </Col>
                <Col
                    s={8}
                    style={{
                    height: '90%',
                    padding: 10
                }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                        key: API_KEY
                    }}
                        onClick={(event) => this.onClick(event)}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}>
                        <AnyReactComponent lat={this.state.pinLat} lng={this.state.pinLng}/>
                    </GoogleMapReact>
                </Col>
                <div></div>

            </div>
        );
    }
}

export default IssuesPage;