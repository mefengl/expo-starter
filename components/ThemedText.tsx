import { useThemeColor } from '@/hooks/useThemeColor'
import { type ClassValue, clsx } from 'clsx'
import { Text, type TextProps } from 'react-native'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

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
      className={cn(
        type === 'default' && 'text-base leading-6',
        type === 'title' && 'text-4xl font-bold leading-8',
        type === 'defaultSemiBold' && 'text-base font-semibold leading-6',
        type === 'subtitle' && 'text-xl font-bold',
        type === 'link' && 'text-base leading-7 text-[#0a7ea4]',
      )}
      style={[{ color }, style]}
      {...rest}
    />
  )
}
