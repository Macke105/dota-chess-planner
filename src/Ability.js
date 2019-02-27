import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import './Ability.scss';

class Ability extends PureComponent {
  render() {
    const { ability } = this.props
    return (
      <div className="ability">
        <img alt="ability" src={require(`${ability.icon}`)}/>
      </div>
    )
  }
}

Ability.propTypes = {
    ability: PropTypes.object.isRequired
  };

export default Ability