import { Button, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, Alert } from 'react-native'
import React, { useContext, useState } from 'react'

import Task from '../components/Task';
import { ThemeContext } from '../context/ThemeContext';
import WabeHeader from '../components/WabeHeader';

const Home = () => {
  const [task, setTask] = useState();
  const [newItem, setNewItem] = useState([])
  const { theme, toggleTheme } = useContext(ThemeContext)

  const addTask = () => {
    Keyboard.dismiss();
    setNewItem([...newItem, task])
    setTask(null)
  }

  const deleteAlert = (index) => {
    Alert.alert(
      'Do you want to delete?',
      '',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => completeTask(index),
          style: 'destructive',
        },
      ],
      { cancelable: false },
    );
  };

  const completeTask = (index) => {
    let itemCopy = [...newItem]
    itemCopy.splice(index, 1)
    setNewItem(itemCopy)
  }


  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#f6f6f6' : '#252525', }]}>
      <WabeHeader />
      <SafeAreaView style={styles.header}>
        <Text style={[styles.mainTitle, { color: theme === 'light' ? '#fff' : '#666666', }]}>Ozan's Tasks</Text>
        <TouchableOpacity onPress={() => toggleTheme()}>
          {theme === 'light' ? <View style={styles.circle}></View> : <View style={styles.circle2}></View>}
        </TouchableOpacity>
      </SafeAreaView>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <View style={styles.tasksContainer}>
            {/* Task is here! */}
            {newItem.map((item, index) => (
              <Task onPress={() => deleteAlert(index)} key={index} text={item} />
            )
            )}
          </View>

        </View>
      </ScrollView>
      
      <KeyboardAvoidingView
        keyboardVerticalOffset={12}
        style={styles.enterTaskContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>

        <TextInput
          value={task}
          onChangeText={text => setTask(text)}
          placeholder='write something'
          style={styles.textInput} />

        <TouchableOpacity onPress={() => addTask()}>
          <View style={styles.add}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingBottom: 120,
  },
  tasksWrapper: {
    paddingHorizontal: 20,
    paddingTop: 20
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: '700',
  },
  tasksContainer: {
    marginTop: 16
  },
  enterTaskContainer: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textInput: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: "#666666",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    color: '#666666'
  },
  add: {
    backgroundColor: '#FFF',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    shadowColor: "#666666",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

  },
  plusText: {
    fontSize: 24,
    color: '#00CBA9'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 60,
  },
  circle: {
    width: 30,
    height: 30,
    borderColor: '#666666',
    borderWidth: 10,
    borderRadius: 16,
  },
  circle2: {
    width: 30,
    height: 30,
    borderColor: 'white',
    borderWidth: 10,
    borderRadius: 16
  },


},)