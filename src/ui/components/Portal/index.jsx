import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

let portalContainer;

class Portal extends Component {
  constructor(props) {
    super(props);

    if (!portalContainer) {
      portalContainer = document.createElement('div');
      portalContainer.setAttribute('portal', '');
      document.body.append(portalContainer);
    }

    this.el = document.createElement('div');
    portalContainer.append(this.el);
  }

  componentWillUnmount() {
    portalContainer.removeChild(this.el);
  }

  render() {
    const { children } = this.props;

    return ReactDOM.createPortal(children, this.el);
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Portal;
