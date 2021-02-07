import './Timer.scss';
import {useEffect, useRef, useState} from 'react';
import {formatTime} from '../services/timerService';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import TimesList from './TimesList';

const Timer = () => {
    const [running, setRunning] = useState(false)
    const [currentTimeMs, setCurrentTimeMs] = useState(0)
    const [currentTimeSec, setCurrentTimeSec] = useState(0)
    const [currentTimeMin, setCurrentTimeMin] = useState(0)
    const [times, setTimes] = useState([])

    const interval = useRef(null)

    console.log(times)

    useEffect(() => {
        if (currentTimeMs >= 1000) {
          setCurrentTimeSec(currentTimeSec + 1);
          setCurrentTimeMs(0);
        }
        if (currentTimeSec >= 60) {
          setCurrentTimeMin(currentTimeMin + 1);
          setCurrentTimeSec(0);
        }
    }, [currentTimeMs, currentTimeSec, currentTimeMin])

    const start = () => {
        setRunning(true);
        interval.current = setInterval(runTimer, 10);
    };

    const stop = () => {
      setRunning(false);
      clearInterval(interval.current);
        const newTime = formatTime(currentTimeMin, currentTimeSec, currentTimeMs);
        setTimes(times.length === 30 ? [newTime] : times.concat([newTime]))
    };

    const runTimer = () => setCurrentTimeMs(prevState => prevState + 10);

    const reset = () => {
        setCurrentTimeMs(0);
        setCurrentTimeSec(0);
        setCurrentTimeMin(0);
    };

    return (
        <div className="timer">
            <KeyboardEventHandler
                handleKeys={['space']}
                // handleEventType={'keyup'}
                onKeyEvent={() => {
                    if(running) {
                        stop()
                    } else {
                        reset()
                        start()
                    }
                }}
            />
            <TimesList times={times}/>
            <div className="time">
                <span className="value">{formatTime(currentTimeMin, currentTimeSec, currentTimeMs)}</span>
            </div>
        </div>
    );
};

export default Timer;
