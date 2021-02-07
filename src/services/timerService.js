const formatValue = (val, type) => {
    let value = val.toString();
    if (value.length < 2) {
        value = '0' + value;
    }
    if (type === 'ms' && value.length < 3) {
        value = '0' + value;
    }
    return value;
};

export const formatTime = (min, sec, ms) => {
    return `${formatValue(min)}:${formatValue(sec)}:${formatValue(ms, 'ms')}`
};