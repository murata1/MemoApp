import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#06c',
        },
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerTitle: 'Memo App',
        headerBackTitle: 'Back',
      }}
    />
  )
}

export default Layout
