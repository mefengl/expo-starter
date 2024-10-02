import type { PropsWithChildren } from 'react'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Colors } from '@/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from 'react'
import { TouchableOpacity, useColorScheme } from 'react-native'

export function Collapsible({ children, title }: { title: string } & PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useColorScheme() ?? 'light'

  return (
    <ThemedView>
      <TouchableOpacity
        activeOpacity={0.8}
        className="flex-row items-center gap-1.5"
        onPress={() => setIsOpen(value => !value)}
      >
        <Ionicons
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
        />
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView className="ml-6 mt-1.5">{children}</ThemedView>}
    </ThemedView>
  )
}
