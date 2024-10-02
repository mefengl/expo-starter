import type { PropsWithChildren, ReactElement } from 'react'

import { ThemedView } from '@/components/ThemedView'
import { useColorScheme } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated'

const HEADER_HEIGHT = 250

type Props = PropsWithChildren<{
  headerBackgroundColor: { dark: string, light: string }
  headerImage: ReactElement
}>

export default function ParallaxScrollView({
  children,
  headerBackgroundColor,
  headerImage,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light'
  const scrollRef = useAnimatedRef<Animated.ScrollView>()
  const scrollOffset = useScrollViewOffset(scrollRef)

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    }
  })

  return (
    <ThemedView className="flex-1">
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          className="h-[250px] overflow-hidden"
          style={[
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}
        >
          {headerImage}
        </Animated.View>
        <ThemedView className="flex-1 gap-4 overflow-hidden p-8">{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  )
}
