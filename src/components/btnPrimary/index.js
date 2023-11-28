import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './styles'

const BtnPrimary = (props) => {
    return (
        <TouchableOpacity style={styles.btnSimpan} onPress={props.handle}>
            <Text style={styles.btnSimpanText}>{props.Text}</Text>
        </TouchableOpacity>
    )
}

export default BtnPrimary