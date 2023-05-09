import { useState } from 'react';
import { View, StyleSheet } from "react-native";
import default_pieces from '../data/default_pieces'
import Block from "./Block";

export default function Board() {
    const [select, setSelect] = useState('')
    const [board, setBoard] = useState(() => {
        let tmp = []
        let block = true
        const column = ['A','B','C','D','E','F','G','H']
        for (let i=0; i<=7; i++) {
            block = !block
            for (let j=0; j<=7; j++) {
                const id = column[j]+(8-i)
                const default_piece = default_pieces.filter(x => x.id == id)
                if (default_piece != 0) {
                    tmp.push({ id:id, player: default_piece[0].player, type: default_piece[0].type, block: block })
                } else {
                    tmp.push({ id:id, player: '', type: '', block: block })
                }
                block = !block
            }
        }
        return tmp
    })

    const handlePress = (id, player, type) => { // TODO
        if (type != '') {
            if (select != '') {
                setSelect('')
            } else {
                setSelect(id)
            }
        } else {
            if (select != '') {
                setSelect('')
            }
        }
    }

    const mapBoard = board.map((x, i) => (
        <Block key={i} 
            id={x.id} player={x.player} 
            type={x.type} block={x.block}
            onPress={(id, player, type) => handlePress(id, player, type)} 
        />
    ))

    return (
        <View style={styles.board}>
            { mapBoard }
        </View>
    );
}

const styles = StyleSheet.create({
    board: {
        borderColor: '#fff',
        borderWidth: '1px',
        width: '95%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});