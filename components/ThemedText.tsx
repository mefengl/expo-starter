import { useThemeColor } from '@/hooks/useThemeColor'
import { StyleSheet, Text, type TextProps } from 'react-native'

export type ThemedTextProps = {
  darkColor?: string
  lightColor?: string
  type?: 'default' | 'defaultSemiBold' | 'link' | 'subtitle' | 'title'
} & TextProps

export function ThemedText({
  darkColor,
  lightColor,
  style,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ dark: darkColor, light: lightColor }, 'text')

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
  link: {
    color: '#0a7ea4',
    fontSize: 16,
    lineHeight: 30,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
})
