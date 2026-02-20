import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';

interface NetworkCardProps {
    user: {
        id: string;
        name: string;
        role: string;
        mutualConnections: number;
        avatar: string;
        banner: string;
    };
}

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 2 columns with padding and gap

export default function NetworkCard({ user }: NetworkCardProps) {
    return (
        <View className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-3" style={{ width: cardWidth }}>
            <View className="h-14 relative">
                <Image
                    source={{ uri: user.banner }}
                    className="w-full h-full"
                    resizeMode="cover"
                />
                <View className="absolute -bottom-8 left-0 right-0 items-center">
                    <Image
                        source={{ uri: user.avatar }}
                        className="w-16 h-16 rounded-full border-2 border-white"
                    />
                </View>
                <TouchableOpacity className="absolute top-2 right-2 bg-black/50 rounded-full p-1">
                    <MaterialIcons name="close" size={16} color="white" />
                </TouchableOpacity>
            </View>

            <View className="pt-10 pb-4 px-2 items-center">
                <Text className="font-bold text-center text-sm mb-1" numberOfLines={1}>
                    {user.name}
                </Text>
                <Text className="text-gray-500 text-center text-xs mb-2 h-8" numberOfLines={2}>
                    {user.role}
                </Text>
                <Text className="text-gray-500 text-xs mb-3">
                    {user.mutualConnections} mutual connections
                </Text>

                <TouchableOpacity className="w-full py-1 rounded-full border border-blue-600 flex-row items-center justify-center gap-1 active:bg-blue-50">
                    <Text className="text-blue-600 font-bold text-sm">Connect</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
