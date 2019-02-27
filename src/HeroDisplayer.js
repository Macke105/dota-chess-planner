import React, { PureComponent  } from 'react';
import PropTypes from "prop-types";
import Hero from './Hero';
import './HeroDisplayer.scss';

class HeroDisplayer extends PureComponent  {
    render() {
      const { heroList, abilityList } = this.props;

      return (
        <div className="hero_displayer">
          {heroList.map(hero => (
            <Hero hero={hero} ability={abilityList[hero.spellId]}/>
          ))}
        </div>
      );
    }
  }

  HeroDisplayer.propTypes = {
    heroList: PropTypes.array.isRequired,
    abilityList: PropTypes.array.isRequired
  };

  export default HeroDisplayer;