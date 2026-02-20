import React, { useState, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { chats } from '@/data/chats';

const { width } = Dimensions.get('window');

export default function StatusScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    const user = chats.find(chat => chat.id === id);
    const stories = user?.story || [];

    // If no user or stories, go back
    useEffect(() => {
        if (!user || stories.length === 0) {
            router.back();
        }
    }, [user, stories]);

    if (!user || stories.length === 0) return <View className="flex-1 bg-black" />;

    // LOGIQUE DU TIMER (5 secondes par story)
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((old) => {
                if (old >= 100) {
                    // Si fini, on passe à la suivante
                    changeStory(currentIndex + 1);
                    return 0;
                }
                return old + 2; // Vitesse de remplissage (approx 2.5s -> 50 * 50ms = 2500ms... adjusted to +2 for faster demo or +1 for 5s) 
                // Original code was +1 every 50ms = 5000ms = 5s. 
            });
        }, 50); // Mettre à jour toutes les 50ms

        return () => clearInterval(timer);
    }, [currentIndex]);

    // Fonction pour changer de story
    const changeStory = (index: number) => {
        if (index >= stories.length) {
            router.back(); // Fini ? On ferme la page
        } else if (index < 0) {
            // router.back(); // Retour en arrière ? On ferme aussi (ou rien)
            setCurrentIndex(0);
            setProgress(0);
        } else {
            setCurrentIndex(index);
            setProgress(0); // Reset barre
        }
    };

    const currentStory = stories[currentIndex];

    // Helper to get image source
    const getImageSource = (story: any) => {
        if (typeof story === 'string') return { uri: story };
        if (story.img) {
            return story.img; // Assuming it's a require or {uri: ...}
        }
        return story; // Fallback
    };

    // Helper to get caption
    const getCaption = (story: any) => {
        return story.caption || '';
    };

    return (
        <View className="flex-1 bg-black">
            <StatusBar style="light" />

            {/* 1. IMAGE DE FOND (Plein écran) */}
            <Image
                source={getImageSource(currentStory)}
                className="absolute w-full h-full"
                resizeMode="contain" // "contain" pour voir toute l'image (bords noirs) ou "cover" pour remplir
            />

            <SafeAreaView className="flex-1 justify-between">

                {/* --- HEADER (Barres + Infos) --- */}
                <View className="pt-2 px-2 top-8">

                    {/* Barres de progression */}
                    <View className="flex-row gap-1 mb-3">
                        {stories.map((story, index) => (
                            <View key={index} className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden">
                                {/* La barre active se remplit, les passées sont pleines, les futures vides */}
                                <View
                                    className="h-full bg-white"
                                    style={{
                                        width: index === currentIndex ? `${progress}%` : index < currentIndex ? '100%' : '0%'
                                    }}
                                />
                            </View>
                        ))}
                    </View>

                    {/* Info User + Croix Retour */}
                    <View className="flex-row items-center justify-between px-1">
                        <View className="flex-row items-center">
                            <TouchableOpacity onPress={() => router.back()}>
                                <Ionicons name="arrow-back" size={24} color="white" />
                            </TouchableOpacity>
                            <Image
                                source={{ uri: user.img }}
                                className="w-10 h-10 rounded-full ml-2 border border-gray-500"
                            />
                            <View className="ml-3">
                                <Text className="text-white font-bold text-base">{user.from}</Text>
                                <Text className="text-gray-300 text-xs">Aujourd'hui, 10:00</Text>
                            </View>
                        </View>
                        <Ionicons name="ellipsis-vertical" size={24} color="white" />
                    </View>
                </View>

                {/* --- ZONE DE TAP (Invisible) --- */}
                {/* Astuce : Deux gros boutons invisibles pour taper à gauche ou à droite */}
                <View className="flex-row flex-1" style={{ zIndex: 0 }}>
                    <TouchableOpacity className="flex-1" onPress={() => changeStory(currentIndex - 1)} />
                    <TouchableOpacity className="flex-1" onPress={() => changeStory(currentIndex + 1)} />
                </View>

                {/* --- FOOTER (Caption + Input) --- */}
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    className="pb-4 px-3 items-center"
                >
                    {/* Caption (Légende) */}
                    {getCaption(currentStory) ? (
                        <Text className="text-white text-center text-lg font-bold mb-4 bg-black/30 p-2 rounded-lg">
                            {getCaption(currentStory)}
                        </Text>
                    ) : null}

                    {/* Input Réponse */}
                    <View className="w-full flex-row items-center gap-3">
                        <View className="flex-1 bg-gray-800/80 rounded-full flex-row items-center px-4 py-3 border border-gray-600">
                            <TextInput
                                placeholder="Répondre"
                                placeholderTextColor="#9ca3af"
                                className="flex-1 text-white text-base ml-2"
                            />
                        </View>
                        {/* Bouton Like / Coeur */}
                        <TouchableOpacity className="bg-gray-800/80 w-12 h-12 rounded-full items-center justify-center border border-gray-600">
                            <Ionicons name="heart-outline" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>

            </SafeAreaView>
        </View>
    );
}
