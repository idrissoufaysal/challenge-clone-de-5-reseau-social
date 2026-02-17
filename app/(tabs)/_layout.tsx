import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].headerBackground,
        },
        headerTintColor: Colors[colorScheme ?? 'light'].headerTintColor,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'WhatsApp',
          headerTitleStyle: {
            color: Colors[colorScheme ?? 'light'].headerBackground,
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          tabBarIcon: ({ color }) => <MaterialIcons name="chat" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="story"
        options={{
          title: 'Actus',
          tabBarIcon: ({ color }) => <Feather name="message-circle" size={24} color="black" />, // Using a generic icon for now, potentially Status icon later
        }}
      />
      <Tabs.Screen
        name="communaute"
        options={{
          title: 'Communautés',
          tabBarIcon: ({ color }) => <FontAwesome6 name="users" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="appel"
        options={{
          title: 'Appels',
          tabBarIcon: ({ color }) => <MaterialIcons name="call" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
