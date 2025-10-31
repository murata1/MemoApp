import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerInner}>
        <Text style={styles.headerTitle}>Memo App</Text>
        <Text style={styles.headerRight}>ログアウト</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    height: 104,
    backgroundColor: '#06c',
    justifyContent: 'flex-end',
  },
  headerInner: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export default Header;
