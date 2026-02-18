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
import { Text, View } from 'react-native';


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
            height: 80,
            elevation: 0,
            borderTopWidth: 0,
            paddingBottom: 10,
            paddingTop: 10,
          },
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          tabBarIcon: ({ color, focused, }) =>
            <View className={`relative h-8 w-16 items-center justify-center rounded-full ${focused ? 'bg-green-100' : 'bg-transparent'}`}>
              <MaterialIcons name="chat" size={24} color={color} />
              <View className='absolute top-0 right-0.5 bg-green-600 h-4 w-6 flex rounded-full items-center justify-center'> <Text className='text-white'>5</Text></View>
            </View>
        }}
      />
      <Tabs.Screen
        name="story"
        options={{
          title: 'Actus',
          tabBarIcon: ({ color, focused }) =>
            <View className={`h-8 w-16 items-center justify-center rounded-full ${focused ? 'bg-green-200' : 'bg-transparent'}`}>
              <Feather name="message-circle" size={24} color={color} />
              <View className='absolute top-0 right-0 bg-green-600 h-3 w-3 flex rounded-full items-center justify-center'></View>
            </View>
        }}
      />
      <Tabs.Screen
        name="communaute"
        options={{
          title: 'Communautés',
          tabBarIcon: ({ color, focused }) =>
            <View className={`h-8 w-16 items-center justify-center rounded-full ${focused ? 'bg-green-200' : 'bg-transparent'}`}>
              <FontAwesome6 name="users" size={24} color={color} />
            </View>,
        }}
      />
      <Tabs.Screen
        name="appel"
        options={{
          title: 'Appels',
          tabBarIcon: ({ color, focused }) =>
            <View className={`h-8 w-16 items-center justify-center rounded-full ${focused ? 'bg-green-200' : 'bg-transparent'}`}>
              <MaterialIcons name="call" size={24} color={color} />
            </View>,
        }}
      />
    </Tabs>
  );
}
