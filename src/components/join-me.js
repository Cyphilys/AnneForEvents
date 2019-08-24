import React from "react"

import { Button } from 'antd';
import { Link } from "gatsby"


export default class JoinMe extends React.Component {
  state = {
    size: 'large',
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Link to="/about">
          <Button type="primary" shape="round" size={size}>
            Contactez-moi !
          </Button>
        </Link>
      </div>
    );
  }
}
