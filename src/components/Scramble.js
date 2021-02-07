import './Scramble.scss';
import {createScramble} from '../services/scrambleService';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import {useState} from 'react';

const Scramble = () => {
  const [scramble, setScramble] = useState(createScramble())
  return (
    <div className="scramble">
        <KeyboardEventHandler
            handleKeys={['space']}
            handleEventType={'keyup'}
            onKeyEvent={() => setScramble(createScramble())}
        />
        <span>SCRAMBLE</span>
        <span>{scramble}</span>
    </div>
  );
}

export default Scramble;
