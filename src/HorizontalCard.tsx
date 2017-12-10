import * as React from 'react';

interface Props {
  profileUrl: string,
  description: string
}

class HorizontalCard extends React.Component<Props, any> {
    render() {
        return (<div className="col s12">
        <div className="card horizontal">
          <div className="valign-wrapper card-image" style={{padding: 5}}>
            <img className="z-depth-2" style={{borderRadius: '50%'}} src={this.props.profileUrl} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>{this.props.description}</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>);
    }
}

export default HorizontalCard;