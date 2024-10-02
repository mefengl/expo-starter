import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Image, Platform } from 'react-native'

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ dark: '#1D3D47', light: '#A1CEDC' }}
      headerImage={(
        <Image
          className="absolute bottom-0 left-0 h-[178px] w-[290px]"
          source={require('@/assets/images/partial-react-logo.png')}
        />
      )}
    >
      <ThemedView className="flex-row items-center gap-2">
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView className="mb-2 gap-2">
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit
          {' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>
          {' '}
          to see changes.
          Press
          {' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ android: 'cmd + m', ios: 'cmd + d' })}
          </ThemedText>
          {' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView className="mb-2 gap-2">
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView className="mb-2 gap-2">
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run
          {' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>
          {' '}
          to get a fresh
          {' '}
          <ThemedText type="defaultSemiBold">app</ThemedText>
          {' '}
          directory. This will move the current
          {' '}
          <ThemedText type="defaultSemiBold">app</ThemedText>
          {' '}
          to
          {' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>
          .
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  )
}
