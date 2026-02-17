import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Story } from '@/data/story'

export default function StoryRow({story}: {story: Story}) {
    return (
        <TouchableOpacity className='absolute'>
            <ImageBackground source={{ uri: story.img }} className='w-24 h-44 rounded-3xl ml-2'>
                <Image source={{ uri: story.img }} className="w-12 h-12 rounded-full relative top-3 left-3 border-2 border-green-500 " />
            </ImageBackground>
            <Text className='absolute bottom-2 left-2 text-white'>{story.from}</Text>
        </TouchableOpacity>
    )
}