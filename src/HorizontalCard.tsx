import * as React from 'react';

class HorizontalCard extends React.Component<any, any> {
    render() {
        return (<div className="col s12">
        <div className="card horizontal">
          <div className="valign-wrapper card-image"   style={{padding: 5}}>
            <img className="z-depth-2" style={{borderRadius: '50%'}} src="https://randomuser.me/api/portraits/men/64.jpg" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.</p>
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