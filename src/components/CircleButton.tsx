import {
  Text, StyleSheet, TouchableOpacity,
  type ViewStyle
} from 'react-native';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  style?: ViewStyle;
}

const CircleButton = (props: Props) => {
  const { children, style } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#06c',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)',
    elevation: 8,
  },
  circleButtonLabel: {
    fontSize: 40,
    lineHeight: 40,
    color: '#fff',
  },
});

export default CircleButton;
