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
}

interface State {
    pinLat : number,
    pinLng : number,
    usersState : any,
    issues: HorizontalCard[]
};

class Pin extends React.Component < MapsProps,
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
class IssuesPage extends React.Component <{
    location : any,
    center : any,
    zoom : any
}, State> {
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
            pinLng: 21.23,
            usersState: this.props.location.state,
            issues: []
        };

        fetch(`${process.env["REACT_APP_HOST_NAME"]}/issues`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {return res.json();}).then((json) => {
            this.setState({
                issues: json.map(x => <HorizontalCard profileUrl={x.imageUrl as string}
                 description={x.description as string} />)
            });
        });

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

    submitNewIssue() {
        let btn = (document.getElementById("submitButton") as HTMLElement);
        let description = (document.getElementById("description") as HTMLInputElement).value;
        let imageUrl = (document.getElementById("imageUrl") as HTMLInputElement).value;
        fetch(`${process.env["REACT_APP_HOST_NAME"]}/issues`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author: this.state.usersState.id,
                authorProfileUrl: this.state.usersState.profilePictureUrl,
                description: description,
                imageUrl: imageUrl,
                latitude: this.state.pinLat,
                longitude: this.state.pinLng
            })
        }).then((res) => {
            return res.json();
        }).then((json) => {
            console.log(json);   
            btn.textContent = "Succesfuly sent!";
        });
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
                        actions={<span />}
                        bottomSheet
                        trigger={<NavItem> Submit issue </NavItem>}>
                        <Row>
                            <Input s={2} id="description" label="description"/>
                            <Input s={2} id="imageUrl" label="image url"/>
                        </Row>
                        <Button
                            id="submitButton"
                            style={{
                            background: 'white',
                            color: 'purple',
                            fontWeight: 700,
                            textTransform: 'none'
                        }} onClick={() => this.submitNewIssue()}>Confirm</Button>
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
                   {this.state.issues}
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
                        <Pin lat={this.state.pinLat} lng={this.state.pinLng}/>
                    </GoogleMapReact>
                </Col>
                <div></div>

            </div>
        );
    }
}

export default IssuesPage;