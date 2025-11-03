import {
  View, Text,
  TouchableOpacity, StyleSheet
} from 'react-native';
import { Link } from 'expo-router';

import Icon from './Icon';

const MemoListItem = () => {
  return (
    <Link href="/memo/detail" asChild>
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2025年11月25日 14:00</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icon name="delete" size={26} color="#b0b0b0" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

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
});

export default MemoListItem;
