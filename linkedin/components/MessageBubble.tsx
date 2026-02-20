import React from 'react';
import { View, Text } from 'react-native';
import { Message } from '@/data/chats';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface MessageBubbleProps {
    message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

    const isMyMessage = message.isMyMessage;

    return (
        <View
            className={`rounded-lg p-2 my-1 max-w-[80%] ${isMyMessage ? 'self-end bg-[#005C4B] rounded-tr-none' : 'self-start bg-white rounded-tl-none'} shadow-sm`}
        >
            <Text className={`text-[16px] ${isMyMessage ? 'text-white' : 'text-gray-800'}`}>
                {message.text}
            </Text>
            <Text className={`text-[10px] self-end mt-1 ${isMyMessage ? 'text-gray-300' : 'text-gray-500'}`}>
                {message.createdAt}
            </Text>
        </View>
    );
}
