import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'heroui-native';
import { Link } from 'expo-router';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Chanel } from '@/data/chanels';

interface ChanelRowsProps {
    item: Chanel;
}

export default function ChanelRows({ item }: ChanelRowsProps) {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

    return (
        <Link href={`/chat/${item.id}` as any} asChild>
            <TouchableOpacity>
                <View className="flex-row items-center p-2 gap-2">
                    <Avatar size="sm" alt={item.from}>
                        <Avatar.Image source={{ uri: item.img }} />
                        <Avatar.Fallback>{item.from.substring(0, 2)}</Avatar.Fallback>
                    </Avatar>
                    <View className="flex-1 dark:border-gray-700 pb-2 justify-center">
                        <View className="flex-row justify-between items-center">
                            <Text className="text-[16px] font-semibold" style={{ color: theme.text }}>
                                {item.from}
                            </Text>
                            <View className="px-5 py-2 mr-3 bg-green-100 rounded-2xl">
                                <Text className='font-bold text-green-700'>Suivre</Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 line-clamp-1" numberOfLines={1}>
                            {item.msg}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    );
}
