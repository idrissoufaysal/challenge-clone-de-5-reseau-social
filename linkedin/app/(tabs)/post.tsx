import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PostScreen() {
    const [text, setText] = useState('');
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-white dark:bg-background">
            {/* Header */}
            <View className="flex-row justify-between items-center px-4 py-3 border-b border-gray-100">
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="close" size={26} color="#666" />
                </TouchableOpacity>
                <Text className="font-semibold text-lg text-foreground">Share Post</Text>
                <TouchableOpacity disabled={!text.trim()}>
                    <Text className={`font-semibold text-lg ${text.trim() ? 'text-[#0a66c2]' : 'text-gray-400'}`}>Post</Text>
                </TouchableOpacity>
            </View>

            <View className="flex-1">
                {/* User Info */}
                <View className="px-4 py-4 flex-row items-center gap-3">
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }}
                        className="w-12 h-12 rounded-full"
                    />
                    <View>
                        <Text className="font-bold text-lg text-foreground">Faysal Idrissou</Text>
                        <TouchableOpacity className="flex-row items-center border border-gray-500 rounded-full px-3 py-1 mt-1 self-start">
                            <MaterialIcons name="public" size={14} color="#666" />
                            <Text className="text-sm text-gray-600 font-semibold mx-1">Anyone</Text>
                            <MaterialIcons name="arrow-drop-down" size={16} color="#666" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Input */}
                <TextInput
                    className="flex-1 px-4 text-xl text-foreground"
                    placeholder="What do you want to talk about?"
                    placeholderTextColor="#666"
                    multiline
                    textAlignVertical="top"
                    value={text}
                    onChangeText={setText}
                    style={{ minHeight: 150 }}
                />
            </View>

            {/* Footer / Media Actions */}
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <View className="px-4 py-3 border-t border-gray-100 bg-white dark:bg-background">
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="gap-6">
                        <TouchableOpacity>
                            <MaterialIcons name="image" size={26} color="#666" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialIcons name="videocam" size={28} color="#666" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="file-document" size={26} color="#666" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialIcons name="more-horiz" size={26} color="#666" />
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
