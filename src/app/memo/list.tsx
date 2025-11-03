import { View, StyleSheet } from 'react-native';
import Icon from '../../components/Icon';

import Header from '../../components/Header';
import MemoListItem from '../../components/MemoListItem';
import CircleButton from '../../components/CircleButton';

const Index = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton>
        <Icon name="plus" size={40} color="white" />
      </CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Index;
