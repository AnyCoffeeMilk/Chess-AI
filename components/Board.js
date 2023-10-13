import { useState } from 'react';
import { View, StyleSheet } from "react-native";

import Block from "./Block";

import createBoard from '../modules/createBoard';
import checkMove from '../modules/checkMove';

export default function Board() {
    const [select, setSelect] = useState('')
    const [board, setBoard] = useState(() => createBoard())

    const handlePress = (target_id, player, type) => { // TODO
        if (select != '') {
            target_index = board.findIndex(x => x.id == target_id)
            if (checkMove()) {

            }
        } else {
            setSelect(target_id)
        }
    }

    const mapBoard = board.map((x, i) => (
        <Block key={i} 
            id={x.id} player={x.player} 
            type={x.type} block={x.block}
            onPress={(target_id, player, piece_type) => handlePress(target_id, player, piece_type)} 
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