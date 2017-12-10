import * as React from 'react';
import {Button} from 'react-materialize';

interface Props {
  profileUrl: string,
  description: string,
  onClick: Function
}

class HorizontalCard extends React.Component<Props, any> {
    render() {
        return (<div className="col s12">
        <div className="card horizontal">
          <div className="valign-wrapper card-image" style={{padding: 5}}>
            <img className="z-depth-2" style={{borderRadius: '50%', maxWidth: 75}} src={this.props.profileUrl} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>{this.props.description}</p>
            </div>
            <div className="card-action">
              <Button style={{background: 'purple'}} onClick={() => this.props.onClick()}>Locate</Button>
            </div>
          </div>
        </div>
      </div>);
    }
}

export default HorizontalCard;