import { StyleSheet, Platform } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button } from 'heroui-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, FlatList, Text, ScrollView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import { stories } from '@/data/story';
import StoryRow from '@/components/StoryRow';


export default function TabTwoScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className='flex-row px-4 py-4 justify-between items-center'>
        <Text className='text-2xl font-bold'>Actus</Text>
        <View className='flex-row items-center gap-6'>
          <Feather name="search" size={24} color="black" />
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </View>
      </View>
      <View className='w-[380px] mx-auto'>
      <FlatList
        data={stories}
        renderItem={({ item }) => <StoryRow story={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        className='gap-2 bg-red-700 w-[380px] mx-auto'
        />
        </View>
    </SafeAreaView>
  );
}
