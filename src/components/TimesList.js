import './TimesList.scss';

const TimesList = ({times}) => {
    return (
        <div className="timesList">
            <h3>TIMES HISTORY</h3>
            {times.map((time, key) => <span key={key}>{key + 1}: {time}</span>)}
        </div>
    );
};

export default TimesList;
