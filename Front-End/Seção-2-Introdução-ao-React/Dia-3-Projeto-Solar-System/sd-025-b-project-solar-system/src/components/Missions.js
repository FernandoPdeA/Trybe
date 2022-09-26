import React from 'react';
import Tilte from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="divMissions">
        <Tilte headline="Missões" />
        {missions.map((mission, index) => (
          <MissionCard
            key={ index }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
