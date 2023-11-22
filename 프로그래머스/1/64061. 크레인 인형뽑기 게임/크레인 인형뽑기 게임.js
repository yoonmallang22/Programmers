function solution(board, moves) {
    let result = 0;
    let basket = [];
    moves = moves.map(v => v-1);
    
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[j][moves[i]] !== 0) {
                basket.push(board[j][moves[i]]);
                board[j][moves[i]] = 0;
                break;
            }
        }
    }
        
    while(true) {
        let newBasket = [...basket];

        for (let i = 0; i < basket.length; i++) {
          if(basket[i] === basket[i + 1]) {
            basket.splice(i, 2);
            result += 2;
          }
        }

        if (newBasket.length === basket.length) break;
    }

    return result;
}
    
