import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import Ability from './Ability';
import './Hero.scss';

class Hero extends PureComponent {
  render() {
    const { hero, ability } = this.props
    
    return (
      <div className="hero">
          <img className="hero__icon" alt="heroIcon" src={require(`${hero.icon}`)}></img>
          <div className={`hero__name hero__cost__${hero.cost}`}>{hero.name}★</div>
          <div className="hero__species">
            {this.props.hero.species.map(species => (
              <div className={`hero__species__${species}`}>{species}</div>
            ))}
          </div>
          <div className={`hero__className hero__className__${hero.className}`}>{hero.className}</div>
          <div className="hero__ability">
            <Ability ability={ability} />
          </div>
          <div className="hero__cost"><span>$</span> x {hero.cost}</div>
      </div>
    )
  }
}

Hero.propTypes = {
  hero: PropTypes.shape({
    name: PropTypes.string,
    species: PropTypes.array,
    className: PropTypes.string,
    cost: PropTypes.number,
    icon: PropTypes.string
  }).isRequired,
  ability: PropTypes.object.isRequired
};

export default Hero