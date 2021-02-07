const moves = ['R', 'U', 'D', 'L', 'F', 'B']
const moveType = ['', '\'', '2']

export const createScramble = () => {
    let previousMove = '';
    let result = ''
    for (let i = 0; i < 20; i++) {
        const randomMove = moves[Math.floor(Math.random() * moves.length)];
        const randomType = moveType[Math.floor(Math.random() * moveType.length)];
      if (previousMove === randomMove) {
          i = i - 1;
        continue;
      }
      previousMove = randomMove
      result += randomMove + randomType
        if (i !== 19){
            result += ' '
        }
    }
    return result;
}