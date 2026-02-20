import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NetworkScreen() {
    const requests = [
        { id: '1', name: 'John Doe', headline: 'Software Engineer at Google', avatar: 'https://i.pravatar.cc/150?u=1' },
        { id: '2', name: 'Jane Smith', headline: 'Product Manager at Meta', avatar: 'https://i.pravatar.cc/150?u=2' },
    ];

    const people = [
        { id: '3', name: 'Alice Johnson', headline: 'HR Specialist', avatar: 'https://i.pravatar.cc/150?u=3' },
        { id: '4', name: 'Bob Williams', headline: 'Data Scientist', avatar: 'https://i.pravatar.cc/150?u=4' },
        { id: '5', name: 'Charlie Brown', headline: 'Designer', avatar: 'https://i.pravatar.cc/150?u=5' },
        { id: '6', name: 'Diana Prince', headline: 'Marketing', avatar: 'https://i.pravatar.cc/150?u=6' },
    ];

    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Manage Network */}
                <View className="bg-card mb-2 px-4 py-3 flex-row justify-between items-center">
                    <Text className="text-primary font-semibold text-base">Manage my network</Text>
                    <MaterialIcons name="arrow-forward" size={24} className="text-muted-foreground" />
                </View>

                {/* Invitations */}
                <View className="bg-card mb-2">
                    <View className="px-4 py-3 flex-row justify-between items-center border-b border-border">
                        <Text className="text-foreground font-semibold text-base">Invitations</Text>
                        <Text className="text-muted-foreground text-2xl">→</Text>
                    </View>
                    {requests.map(req => (
                        <View key={req.id} className="px-4 py-3 flex-row items-center gap-3 border-b border-border">
                            <Image source={{ uri: req.avatar }} className="w-16 h-16 rounded-full" />
                            <View className="flex-1">
                                <Text className="font-bold text-base text-foreground">{req.name}</Text>
                                <Text className="text-sm text-muted-foreground">{req.headline}</Text>
                            </View>
                            <View className="flex-row gap-2">
                                <View className="w-10 h-10 rounded-full border border-muted-foreground items-center justify-center">
                                    <MaterialIcons name="close" size={24} className="text-muted-foreground" />
                                </View>
                                <View className="w-10 h-10 rounded-full border border-primary items-center justify-center">
                                    <MaterialIcons name="check" size={24} className="text-primary" />
                                </View>
                            </View>
                        </View>
                    ))}
                    <TouchableOpacity className="py-3 items-center">
                        <Text className="text-primary font-semibold">Show more</Text>
                    </TouchableOpacity>
                </View>

                {/* People you may know */}
                <View className="bg-card p-4">
                    <Text className="text-foreground font-semibold text-base mb-4">People you may know</Text>
                    <View className="flex-row flex-wrap justify-between">
                        {people.map(person => (
                            <View key={person.id} className="w-[48%] bg-card border border-border rounded-lg mb-4 items-center pb-3 overflow-hidden shadow-sm">
                                <View className="w-full h-16 bg-muted relative mb-8">
                                    <TouchableOpacity className="absolute top-2 right-2 bg-black/30 rounded-full p-0.5">
                                        <MaterialIcons name="close" size={16} color="white" />
                                    </TouchableOpacity>
                                    <View className="absolute -bottom-8 left-[30%]">
                                        <Image source={{ uri: person.avatar }} className="w-16 h-16 rounded-full border-2 border-card" />
                                    </View>
                                </View>
                                <View className="px-2 items-center flex-1 w-full">
                                    <Text className="font-bold text-base text-foreground text-center mt-2">{person.name}</Text>
                                    <Text className="text-xs text-muted-foreground text-center mb-4 numberOfLines={2}">{person.headline}</Text>
                                </View>
                                <TouchableOpacity className="w-[80%] border border-primary rounded-full py-1 items-center">
                                    <Text className="text-primary font-semibold">Connect</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
