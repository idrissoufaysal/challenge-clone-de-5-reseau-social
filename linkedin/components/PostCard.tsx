import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface PostProps {
    post: {
        id: string;
        author: {
            name: string;
            headline: string;
            avatar: string;
        };
        content: string;
        image?: string;
        likes: number;
        comments: number;
        reposts: number;
        time: string;
    };
}

export default function PostCard({ post }: PostProps) {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

    return (
        <View className="bg-white dark:bg-background mb-2 pb-2">
            {/* Header */}
            <View className="flex-row px-4 py-3 gap-3">
                <Image
                    source={{ uri: post.author.avatar }}
                    className="h-10 w-10 rounded-full"
                />
                <View className="flex-1">
                    <View className="flex-row justify-between items-start">
                        <Text className="font-bold text-[14px] text-foreground">
                            {post.author.name}
                            <Text className="font-normal text-gray-500"> • 2nd</Text>
                        </Text>
                        <View className="flex-row gap-2">
                            <MaterialCommunityIcons name="dots-horizontal" size={20} color="gray" />
                            <MaterialIcons name="close" size={20} color="gray" />
                        </View>
                    </View>
                    <Text className="text-gray-500 text-xs" numberOfLines={1}>{post.author.headline}</Text>
                    <View className="flex-row items-center gap-1 mt-0.5">
                        <Text className="text-gray-500 text-xs">{post.time} • </Text>
                        <MaterialIcons name="public" size={12} color="gray" />
                    </View>
                </View>
            </View>

            {/* Content */}
            <View className="px-4 pb-2">
                <Text className="text-sm text-foreground leading-5">{post.content}</Text>
            </View>

            {post.image && (
                <Image
                    source={{ uri: post.image }}
                    className="w-full h-[300px]"
                    resizeMode="cover"
                />
            )}

            {/* Statistics */}
            <View className="px-4 py-2 flex-row justify-between items-center border-b border-gray-100/50">
                <View className="flex-row items-center gap-1">
                    <View className="bg-tin-red relative flex-row items-center">
                        <View className="bg-blue-500 rounded-full p-[2px] z-10">
                            <MaterialIcons name="thumb-up" size={8} color="white" />
                        </View>
                        <View className="bg-green-600 rounded-full p-[2px] -ml-1 z-0">
                            <MaterialCommunityIcons name="hand-clap" size={8} color="white" />
                        </View>
                        <View className="bg-red-400 rounded-full p-[2px] -ml-1 z-0">
                            <MaterialIcons name="favorite" size={8} color="white" />
                        </View>
                    </View>
                    <Text className="text-gray-500 text-xs ml-1">{post.likes}</Text>
                </View>
                <Text className="text-gray-500 text-xs">
                    {post.comments} comments • {post.reposts} reposts
                </Text>
            </View>

            {/* Actions */}
            <View className="flex-row justify-between px-2 pt-1">
                <ActionButton icon="thumb-up-outline" label="Like" />
                <ActionButton icon="comment-text-outline" label="Comment" iconSet="MaterialCommunityIcons" />
                <ActionButton icon="repeat" label="Repost" iconSet="MaterialCommunityIcons" />
                <ActionButton icon="send" label="Send" iconSet="AntDesign" size={18} />
            </View>
        </View>
    );
}

function ActionButton({ icon, label, iconSet = "MaterialIcons", size = 20 }: { icon: string, label: string, iconSet?: string, size?: number }) {
    return (
        <TouchableOpacity className="flex-row items-center justify-center py-3 px-2 gap-1.5 flex-1 active:bg-gray-100 rounded-lg">
            {iconSet === "MaterialIcons" && <MaterialIcons name={icon as any} size={size} color="#666666" />}
            {iconSet === "MaterialCommunityIcons" && <MaterialCommunityIcons name={icon as any} size={size} color="#666666" />}
            {iconSet === "FontAwesome5" && <FontAwesome5 name={icon as any} size={size} color="#666666" />}
            <Text className="text-gray-600 font-semibold text-xs">{label}</Text>
        </TouchableOpacity>
    )
}
