import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const storiesData = [
    { id: 'start', type: 'add' },
    { id: '1', name: 'John Doe', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' },
    { id: '2', name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
    { id: '3', name: 'Mike Ross', avatar: 'https://i.pravatar.cc/150?u=a04258114e29026302d' },
    { id: '4', name: 'Rachel Zane', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
    { id: '5', name: 'Harvey Specter', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' },
];

export default function Stories() {
    return (
        <View className="bg-white py-3 border-b border-gray-100/50 mb-2">
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}>
                {storiesData.map((story) => (
                    <TouchableOpacity key={story.id} className="items-center gap-1">
                        {story.type === 'add' ? (
                            <View className="relative">
                                <Image
                                    source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }} // Current user avatar
                                    className="w-14 h-14 rounded-full border border-gray-100"
                                />
                                <View className="absolute bottom-0 right-0 bg-blue-500 rounded-full w-5 h-5 items-center justify-center border-2 border-white">
                                    <MaterialIcons name="add" size={14} color="white" />
                                </View>
                            </View>
                        ) : (
                            <View className="p-[2px] rounded-full border-2 border-blue-500">
                                <Image
                                    source={{ uri: story.avatar }}
                                    className="w-[52px] h-[52px] rounded-full border border-white"
                                />
                            </View>
                        )}
                        <Text className="text-xs text-black font-medium" numberOfLines={1}>
                            {story.type === 'add' ? 'Your story' : story.name?.split(' ')[0]}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}
