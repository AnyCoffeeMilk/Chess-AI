import default_pieces from '../data/default_pieces'

export default function createBoard() {
    let board = []
    let block_type = true
    const column = ['A','B','C','D','E','F','G','H']
    for (let i=0; i<=7; i++) {
        block_type = !block_type
        for (let j=0; j<=7; j++) {
            const id = column[j]+(8-i)
            const default_piece = default_pieces.filter(x => x.id == id)
            if (default_piece != 0) {
                board.push({ 
                    id:id, 
                    player: default_piece[0].player, 
                    piece_type: default_piece[0].type, 
                    block_type: block_type 
                })
            } else {
                board.push({ 
                    id:id, 
                    player: '', 
                    piece_type: '', 
                    block_type: block_type 
                })
            }
            block_type = !block_type
        }
    }
    return board
}