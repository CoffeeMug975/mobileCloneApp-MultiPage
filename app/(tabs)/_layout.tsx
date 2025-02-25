import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native'; // Import StyleSheet

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground'; // Keep this for custom background
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
  screenOptions={{
    tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    headerShown: false,
    tabBarButton: HapticTab,
    tabBarStyle: [
      styles.tabBar,
      Platform.select({
        ios: {
          position: 'absolute',
          backgroundColor: 'transparent',
        },
        default: {
          backgroundColor: 'black',
        },
      }),
    ],
    tabBarLabelStyle: {
      fontSize: 20,
      marginTop: -15,
    },
  }}>
  <Tabs.Screen
    name="index"
    options={{
      title: 'Alarm',
      tabBarIcon: () => null, // Ensure no icon is rendered
    }}
  />
  <Tabs.Screen
    name="worldClock"
    options={{
      title: 'World Clock',
      tabBarIcon: () => null,
    }}
  />
  <Tabs.Screen
    name="stopWatch"
    options={{
      title: 'Stopwatch',
      tabBarIcon: () => null,
    }}
  />
  <Tabs.Screen
    name="timer"
    options={{
      title: 'Timer',
      tabBarIcon: () => null,
    }}
  />
  <Tabs.Screen
    name="stopwatch"
    options={{
      title: 'Stopwatch',
      tabBarIcon: () => null,
    }}
  />
</Tabs>

  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'black', // Black background for the tab bar
  },
  text: {
    fontSize: 20,
  }
});