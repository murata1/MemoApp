import { View, StyleSheet, FlatList } from 'react-native'
import { router, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

import LogOutButton from '../../components/LogOutButton'
import Icon from '../../components/Icon'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import { db, auth } from '../../config'
import { type Memo } from '../../../types/memo'

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = () => {
  const [memos, setMemos] = useState<Memo[]>([])
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <LogOutButton />
      },
    })
  }, [])
  useEffect(() => {
    if (auth.currentUser == null) {
      return
    }
    const ref = collection(db, `user/${auth.currentUser.uid}/memos`)
    const q = query(ref, orderBy('updatedAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const remoteMemos: Memo[] = []
      snapshot.forEach((doc) => {
        const { bodyText, updatedAt } = doc.data()
        remoteMemos.push({
          id: doc.id,
          bodyText,
          updatedAt,
        })
      })
      setMemos(remoteMemos)
    })
    return unsubscribe
  }, [])
  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={({ item }) => <MemoListItem memo={item} />}
      />
      <CircleButton onPress={handlePress}>
        <Icon name="plus" size={40} color="white" />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default List
