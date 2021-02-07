import './TimesList.scss';

const TimesList = ({times}) => {
    return (
        <div className="timesList">
            <h3>TIMES HISTORY</h3>
            {times.map(time => <span>{time}</span>)}
        </div>
    );
};

export default TimesList;
