import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
// This file is used to define the root layout of the app. It uses the Stack component from expo-router to define the navigation structure.
// The Stack component allows for nested navigation stacks, which is useful for creating complex navigation flows.