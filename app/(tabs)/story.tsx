import { StyleSheet, Platform, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { View, FlatList, Text, ScrollView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { stories } from '@/data/story';
import StoryRow from '@/components/StoryRow';
import { chats } from '@/data/chats';
import React from 'react';
import ChanelRows from '@/components/ChanelRows';
import { Button } from 'heroui-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { chanels } from '@/data/chanels';

export default function TabTwoScreen() {
  return (
    <SafeAreaView className="flex-1 dark:bg-black">
      <View className='flex-row px-4 py-4 justify-between items-center'>
        <Text className='text-2xl dark:text-white'>Actus</Text>
        <View className='flex-row items-center gap-6'>
          <Feather name="search" size={24} color="black" />
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </View>
      </View>
      <ScrollView className=''>
        <Text className='px-4 text-lg'>Statut</Text>
        <View className='py-2'>
          <FlatList
            data={stories}
            renderItem={({ item }) => (
              <StoryRow story={item} />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
          />
        </View>
        <View className='flex-row px-4 justify-between items-center'>
          <Text className='font-bold'>Chaines</Text>
          <View className='bg-gray-200 w-16 px-2 py-1 rounded-2xl'>
            <Text>Explore</Text>
          </View>
        </View>

        {/* chaine  */}
        <FlatList
          data={chats}
          renderItem={({ item }) => (
            <ChanelRows item={item} />
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
        <View className='flex-row px-5 my-2 justify-between items-center'>
          <Text className='mt-2 pr-2 text-gray-500'>Trouver des chaine a suivre</Text>
          <Text className='mt-2 pr-2'>Voir tout</Text>
        </View>
        <FlatList
          data={chanels}
          renderItem={({ item }) => (
            <ChanelRows item={item} />
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
        <View className='flex-col px-5 my-2 items-center mb-10 gap-2'>
          <Button className='w-full bg-background border border-gray-300 flex items-center'>
            <Ionicons name="grid-outline" size={20} color="green" /> <Text className='text-green-700'>Explorer plus</Text>  </Button>
          <Button className='w-full bg-background border border-gray-300'><AntDesign name="plus" size={20} color="green" /> <Text className='text-green-700'>créer une chaine</Text>  </Button>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
