import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { router } from 'expo-router';

import Icon from '../../components/Icon';
import CircleButton from '../../components/CircleButton';

const handlePress = (): void => {
  router.push('/memo/edit');
 };

const Detail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2025年11月25日 16:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          牛乳、卵、パン、バナナを購入する。
          帰りにコンビニで飲み物も買う。
        </Text>
      </ScrollView>
      <CircleButton onPress={handlePress} style={{ top: 60, bottom: 'auto' }}>
        <Icon name="pencil" size={40} color="white" />
      </CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  memoHeader: {
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    height: 96,
    backgroundColor: '#06c',
  },
  memoTitle: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  memoDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#fff',
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});

export default Detail;
