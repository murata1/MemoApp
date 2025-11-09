import { View, TextInput, StyleSheet, Alert } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { auth, db } from '../../config'
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'

const handlePress = (id: string, bodyText: string): void => {
  if (auth.currentUser === null) return
  const ref = doc(db, `user/${auth.currentUser.uid}/memos`, id)
  setDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date()),
  })
    .then(() => {
      router.back()
    })
    .catch((error) => {
      Alert.alert('更新に失敗しました')
    })
}

const Edit = () => {
  const id = String(useLocalSearchParams().id)
  const [bodyText, setBodyText] = useState('')
  useEffect(() => {
    if (auth.currentUser == null) return
    const ref = doc(db, `user/${auth.currentUser.uid}/memos`, id)
    getDoc(ref)
      .then((docRef) => {
        const RemoteBodyText = docRef?.data()?.bodyText
        setBodyText(RemoteBodyText)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          value={bodyText}
          autoCapitalize="none"
          autoFocus
          onChangeText={(text) => {
            setBodyText(text)
          }}
        />
      </View>
      <CircleButton
        onPress={() => {
          handlePress(id, bodyText)
        }}
      >
        <Icon name="check" size={40} color="white" />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
})

export default Edit
