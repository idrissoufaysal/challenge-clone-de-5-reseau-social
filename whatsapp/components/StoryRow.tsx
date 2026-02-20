import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Story } from '@/data/story'
import { useRouter } from 'expo-router'

export default function StoryRow({ story }: { story: Story }) {
    const router = useRouter();
    return (
        <TouchableOpacity className='mr-2 relative' onPress={() => router.push(`/status/${story.id}` as any)}>
            <ImageBackground
                source={{ uri: story.img }}
                className='w-20 min-h-32 rounded-xl overflow-hidden justify-between'
                imageStyle={{ borderRadius: 12 }}
            >
                <View className="absolute top-1 left-1 bg-blue-500 rounded-full border-2 border-green-500">
                    <Image source={{ uri: story.img }} className="w-8 h-8 rounded-full " />
                </View>
                <View className="flex-1" />
                <Text className='text-white font-bold p-2 text-sm shadow-md' numberOfLines={2}>
                    {story.name}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}