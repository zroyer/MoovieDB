import React, { Component } from 'react';
import Header from '../components/Header'

class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='movie-container'>
          <div className='prompt'>
            <div>404 - Not Found!&nbsp;&nbsp;
              <span role='img' className='shrug' aria-label='shrug'>🤷‍</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default NotFound;
