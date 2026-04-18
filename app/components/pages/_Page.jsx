import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

class Page extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Header />

        <div
          className="container"
          style={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {this.props.children}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Page;
