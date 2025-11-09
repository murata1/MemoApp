import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { Link } from 'expo-router'
import { doc, deleteDoc } from 'firebase/firestore'

import Icon from './Icon'
import { type Memo } from '../../types/memo'
import { auth, db } from '../config'

interface Props {
  memo: Memo
}

const handlePress = (id: string): void => {
  if (auth.currentUser == null) return
  const ref = doc(db, `user/${auth.currentUser.uid}/memos`, id)
  Alert.alert('メモを削除します', 'よろしいですか？', [
    {
      text: 'キャンセル',
      style: 'cancel',
    },
    {
      text: '削除',
      style: 'destructive',
      onPress: () => {
        deleteDoc(ref).catch(() => {
          Alert.alert('削除に失敗しました')
        })
      },
    },
  ])
}

const MemoListItem = (props: Props) => {
  const { memo } = props
  const { bodyText, updatedAt } = memo
  if (bodyText == null || updatedAt == null) {
    return null
  }
  const dataString = updatedAt.toDate().toLocaleString('ja-JP')
  return (
    <Link href={{ pathname: '/memo/detail', params: { id: memo.id } }} asChild>
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          <Text numberOfLines={1} style={styles.memoListItemTitle}>
            {bodyText}
          </Text>
          <Text style={styles.memoListItemDate}>{dataString}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              handlePress(memo.id)
            }}
          >
            <Icon name="delete" size={26} color="#b0b0b0" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#777',
  },
})

export default MemoListItem
