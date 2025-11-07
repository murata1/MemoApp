import { View, Text, StyleSheet, type TextStyle } from 'react-native'

interface Props {
  children: string
  bang?: boolean
  style?: TextStyle
}

const Hello = (props: Props) => {
  const { children, bang, style } = props
  return (
    <View>
      <Text style={[styles.text, style]}>
        Hello {children}
        {bang === true ? '!' : ''}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: 'blue',
    padding: 16,
  },
})

export default Hello
