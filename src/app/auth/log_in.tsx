import {
  View, Text, TextInput,
  TouchableOpacity, StyleSheet
} from 'react-native';
import { Link, router } from 'expo-router';

import Header from '../../components/Header';
import Button from '../../components/Button';

const handlePress = () => {
  // ログイン処理をここに実装
  router.push('/memo/list')
 };

const LogIn = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input} value='Email Address' />
        <TextInput style={styles.input} value='Password' />
        <Button label="Submit" onPress={handlePress} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Link href="/auth/sign_up" asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Sign up here!</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#fff',
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: '#333',
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#06c',
  },
});

export default LogIn;
