import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-background" edges={['bottom', 'left', 'right']}>
            <Stack.Screen options={{ headerShown: true }} />

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header Section */}
                <View className="bg-card mb-2 pb-4">
                    {/* Cover Image */}
                    <View className="h-24 bg-muted relative">
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80' }}
                            className="w-full h-full"
                            resizeMode="cover"
                        />
                        <TouchableOpacity onPress={() => router.back()} className="absolute top-4 left-4 bg-black/30 rounded-full p-1">
                            <MaterialIcons name="arrow-back" size={24} color="white" />
                        </TouchableOpacity>
                    </View>

                    <View className="px-4">
                        {/* Avatar */}
                        <View className="-mt-12 mb-3">
                            <Image
                                source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }}
                                className="w-24 h-24 rounded-full border-4 border-card"
                            />
                        </View>

                        {/* Info */}
                        <View className="flex-row justify-between items-start">
                            <View className="flex-1 mr-4">
                                <Text className="text-2xl font-bold text-foreground">Faysal Idrissou</Text>
                                <Text className="text-base text-foreground mt-1">Full Stack Developer | React Native | Expo | NodeJS</Text>
                                <Text className="text-sm text-muted-foreground mt-1">Lomé, Maritime Region, Togo</Text>
                                <Text className="text-sm text-primary font-semibold mt-1">Contact info</Text>
                            </View>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="pencil" size={24} className="text-muted-foreground" />
                            </TouchableOpacity>
                        </View>

                        <Text className="text-sm text-primary font-semibold mt-2">500+ connections</Text>

                        {/* Buttons */}
                        <View className="flex-row gap-3 mt-4">
                            <TouchableOpacity className="flex-1 bg-primary rounded-full py-1.5 items-center">
                                <Text className="text-primary-foreground font-semibold text-base">Open to</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="flex-1 border border-primary rounded-full py-1.5 items-center">
                                <Text className="text-primary font-semibold text-base">Add section</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="w-10 border border-muted-foreground rounded-full items-center justify-center">
                                <MaterialIcons name="more-horiz" size={24} className="text-muted-foreground" />
                            </TouchableOpacity>
                        </View>

                        {/* Analytics Card */}
                        <View className="bg-muted/50 rounded-lg p-3 mt-4 flex-row justify-between">
                            <View>
                                <Text className="font-semibold text-sm text-foreground">Open to work</Text>
                                <Text className="text-xs text-muted-foreground">Software Engineer roles</Text>
                                <Text className="text-xs text-primary font-medium mt-1">Show details</Text>
                            </View>
                            <MaterialIcons name="edit" size={18} className="text-muted-foreground" />
                        </View>
                    </View>
                </View>

                {/* Analytics */}
                <View className="bg-card mb-2 p-4">
                    <Text className="font-bold text-lg text-foreground mb-1">Analytics</Text>
                    <Text className="text-xs text-muted-foreground mb-3 ml-1"><MaterialIcons name="visibility" size={12} /> Private to you</Text>

                    <View className="flex-row gap-4 mb-4">
                        <MaterialCommunityIcons name="account-group" size={24} className="text-muted-foreground" />
                        <View>
                            <Text className="font-bold text-sm text-foreground">32 profile views</Text>
                            <Text className="text-xs text-muted-foreground">Discover who's viewed your profile.</Text>
                        </View>
                    </View>
                    <View className="flex-row gap-4">
                        <MaterialIcons name="bar-chart" size={24} className="text-muted-foreground" />
                        <View>
                            <Text className="font-bold text-sm text-foreground">180 post impressions</Text>
                            <Text className="text-xs text-muted-foreground">Check out who's engaging with your posts.</Text>
                        </View>
                    </View>
                </View>

                {/* About */}
                <View className="bg-card mb-2 p-4">
                    <View className="flex-row justify-between items-center mb-2">
                        <Text className="font-bold text-xl text-foreground">About</Text>
                        <MaterialCommunityIcons name="pencil" size={24} className="text-muted-foreground" />
                    </View>
                    <Text className="text-base text-foreground leading-6">
                        Passionate Full Stack Developer with experience in building mobile and web applications.
                        Skilled in React Native, Expo, React.js, Node.js, and Firebase.
                        Always eager to learn new technologies and solve complex problems.
                    </Text>
                </View>

                {/* Experience */}
                <View className="bg-card mb-2 p-4">
                    <View className="flex-row justify-between items-center mb-4">
                        <Text className="font-bold text-xl text-foreground">Experience</Text>
                        <View className="flex-row gap-4">
                            <MaterialIcons name="add" size={28} className="text-muted-foreground" />
                            <MaterialCommunityIcons name="pencil" size={24} className="text-muted-foreground" />
                        </View>
                    </View>

                    {/* Job Item */}
                    <View className="flex-row gap-3 mb-4">
                        <Image source={{ uri: 'https://logo.clearbit.com/google.com' }} className="w-12 h-12" resizeMode="contain" />
                        <View className="flex-1 pb-4 border-b border-border">
                            <Text className="font-bold text-base text-foreground">Senior React Native Developer</Text>
                            <Text className="text-sm text-foreground">Tech Innovations Inc. · Full-time</Text>
                            <Text className="text-xs text-muted-foreground">Jan 2023 - Present · 1 yr 2 mos</Text>
                            <Text className="text-xs text-muted-foreground">San Francisco, California, United States · Remote</Text>
                            <Text className="text-sm text-foreground mt-2">
                                Leading the mobile development team, architecting scalable solutions, and mentoring junior developers.
                            </Text>
                        </View>
                    </View>

                    {/* Job Item */}
                    <View className="flex-row gap-3">
                        <Image source={{ uri: 'https://logo.clearbit.com/airbnb.com' }} className="w-12 h-12" resizeMode="contain" />
                        <View className="flex-1">
                            <Text className="font-bold text-base text-foreground">Frontend Developer</Text>
                            <Text className="text-sm text-foreground">Creative Solutions · Contract</Text>
                            <Text className="text-xs text-muted-foreground">Jun 2021 - Dec 2022 · 1 yr 7 mos</Text>
                            <Text className="text-xs text-muted-foreground">New York, NY · Hybrid</Text>
                        </View>
                    </View>
                </View>

                {/* Education */}
                <View className="bg-card mb-4 p-4">
                    <View className="flex-row justify-between items-center mb-4">
                        <Text className="font-bold text-xl text-foreground">Education</Text>
                        <View className="flex-row gap-4">
                            <MaterialIcons name="add" size={28} className="text-muted-foreground" />
                            <MaterialCommunityIcons name="pencil" size={24} className="text-muted-foreground" />
                        </View>
                    </View>

                    {/* Education Item */}
                    <View className="flex-row gap-3">
                        <Image source={{ uri: 'https://logo.clearbit.com/stanford.edu' }} className="w-12 h-12" resizeMode="contain" />
                        <View className="flex-1">
                            <Text className="font-bold text-base text-foreground">Stanford University</Text>
                            <Text className="text-sm text-foreground">Bachelor's degree, Computer Science</Text>
                            <Text className="text-xs text-muted-foreground">2017 - 2021</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
