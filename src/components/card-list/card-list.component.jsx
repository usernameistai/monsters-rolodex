import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = (props) => {
  // props are received from above, filter down structure
  return (
    <div className='card-list'>
      { props.monsters.map(monster => 
        <Card key={monster.id} monster={monster}/>
        )
      }
    </div>
    );
}