import JobCard from '@/components/JobCard';
import { jobs, recommendedSearches } from '@/data/jobs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function JobsScreen() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            {/* Header */}
            <View className="bg-card px-4 py-3 flex-row justify-between items-center mb-2 shadow-sm">
                <Link href="/profile" asChild>
                    <TouchableOpacity>
                        <View className="bg-card rounded-full h-8 w-8 items-center justify-center relative">
                            <Image source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }} className="w-8 h-8 rounded-full" />
                        </View>
                    </TouchableOpacity>
                </Link>

                <View className="flex-1 bg-muted/70 h-9 mx-3 rounded items-center flex-row px-2">
                    <MaterialIcons name="search" size={20} className="text-muted-foreground" />
                    <Text className="text-muted-foreground ml-2 text-sm">Search jobs</Text>
                </View>

                <MaterialIcons name="more-vert" size={24} className="text-muted-foreground" />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Quick Actions / Recommended Searches */}
                <View className="bg-card px-4 py-4 mb-2">
                    <Text className="font-semibold text-base mb-3 text-foreground">Recommended for you</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="gap-2">
                        {recommendedSearches.map((item, index) => (
                            <TouchableOpacity key={index} className="px-4 py-2 bg-transparent border border-muted-foreground rounded-full">
                                <Text className="text-muted-foreground font-medium">{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Jobs List */}
                <View className="bg-card">
                    <View className="px-4 py-3 border-b border-border flex-row justify-between items-center">
                        <Text className="font-semibold text-base text-foreground">Recommended for you</Text>
                        <Text className="text-primary font-semibold text-sm">See all (10+)</Text>
                    </View>
                    {jobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
