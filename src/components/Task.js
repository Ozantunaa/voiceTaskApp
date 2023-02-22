import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import * as Speech from 'expo-speech';

import { ThemeContext } from '../context/ThemeContext';


const Task = ({ text, onPress}) => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const {theme} = useContext(ThemeContext)

    const speak = (index) => {
        setIsSpeaking(true)
        Speech.speak(index, {
            onDone: () => {
                setIsSpeaking(false)
            }
        })
    }

    return (
        <View style={[styles.mainItem, { backgroundColor: theme === 'light' ? 'white' : '#666666', }]}>
            <View style={styles.leftItem}>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.square}></View>
                </TouchableOpacity>
                <Text style={[styles.taskText,{ color: theme === 'dark' ? 'white' : '#666666', }]}>{text}</Text>
            </View>
            {isSpeaking ? <ActivityIndicator color={"#00CBA9"} />
                : <TouchableOpacity onPress={() => speak(text)} style={styles.circle}></TouchableOpacity>}
        </View>
    )
}

const styles = StyleSheet.create({
    mainItem: {
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 12
    },
    leftItem: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 16,
        height: 16,
        borderColor: 'tomato',
        borderWidth: 3,
        borderRadius: 8,
        marginRight: 8
    },
    taskText: {
        maxWidth: '80%'
    },
    circle: {
        width: 16,
        height: 16,
        borderColor: '#00CBA9',
        borderWidth: 3,
        borderRadius: 8

    },
})
export default Task
