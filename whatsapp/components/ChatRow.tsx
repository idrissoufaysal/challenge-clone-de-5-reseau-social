import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'heroui-native';
import { Link } from 'expo-router';
import { Chat } from '@/data/chats';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface ChatRowProps {
    item: Chat;
}

export default function ChatRow({ item }: ChatRowProps) {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

    return (
        <Link href={`/chat/${item.id}` as any} asChild>
            <TouchableOpacity>
                <View className="flex-row items-center p-3 gap-2">
                    <Avatar size="md" alt={item.from}>
                        <Avatar.Image source={{ uri: item.img }} />
                        <Avatar.Fallback>{item.from.substring(0, 2)}</Avatar.Fallback>
                    </Avatar>
                    <View className="flex-1 dark:border-gray-700 pb-3 justify-center gap-1">
                        <View className="flex-row justify-between items-center">
                            <Text className="text-lg font-bold" style={{ color: theme.text }}>
                                {item.from}
                            </Text>
                            <Text className="text-gray-500 text-sm">
                                {item.date}
                            </Text>
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
