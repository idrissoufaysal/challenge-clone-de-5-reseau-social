import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { chats, Chat } from '@/data/chats';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import MessageBubble from '@/components/MessageBubble';
import { Button, Description, Input, TextField } from 'heroui-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ChatDetailScreen() {
    const { id } = useLocalSearchParams();
    const [chat, setChat] = useState<Chat | undefined>(undefined);
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

    useEffect(() => {
        const foundChat = chats.find((c) => c.id === id);
        setChat(foundChat);

        if (foundChat) {
            navigation.setOptions({
                title: foundChat.from,
                headerBackTitleVisible: false,
            });
        }
    }, [id, navigation]);

    if (!chat) {
        return <View><Text>Chat not found</Text></View>;
    }

    return (
        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/originals/97/c0/07/97c00759d90d786d9b6096d274ad3e07.png' }}
            style={[styles.backgroundImage, { backgroundColor: theme.background }]}
        >
            <FlatList
                data={chat.messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MessageBubble message={item} />}
                contentContainerStyle={{ padding: 10, paddingBottom: 20 }}
            />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
                style={styles.inputContainer}
            >
                <View className="flex-row items-center gap-2 bg-transparent p-2 w-full">
                    <TextField className='flex-1'>
                        <Input placeholder="Enter your email" className='w-full' />
                    </TextField>
                    <Button isIconOnly className='bg-green-500 rounded-full p-3 items-center justify-center'>
                        <MaterialIcons name="mic" size={24} color="white" />                    </Button>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    inputContainer: {
        padding: 10,
    }
});
