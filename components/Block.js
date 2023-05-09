import { View } from "react-native";
import { StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { Rook, Knight, Bishop, Queen, King, Pawn } from './Pieces'
import { Svg, Path } from "react-native-svg";

export default function Block({ id, player, type, block, onPress }) {
    const color = player == 'white' ? '#fff' : '#000'
    const piece = () => {
        if (type == 'rook') {
            return <Rook color={color} />
        } else if (type == 'knight') {
            return <Knight color={color} />
        } else if (type == 'bishop') {
            return <Bishop color={color} />
        } else if (type == 'queen') {
            return <Queen color={color} />
        } else if (type == 'king') {
            return <King color={color} />
        } else if (type == 'pawn') {
            return <Pawn color={color} />
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => onPress(id, player, type)}>
            <View style={block == true ? styles.blockDark : styles.blockLight}>
                { piece() }
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    blockDark: {
        backgroundColor: '#777',
        borderColor: '#fff',
        borderWidth: '1px',
        width: '12.499999%',
        paddingTop: '12.5%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    blockLight: {
        backgroundColor: '#aaa',
        borderColor: '#fff',
        borderWidth: '1px',
        width: '12.5%',
        paddingTop: '12.5%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    }
})