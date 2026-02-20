import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface JobProps {
    job: {
        id: string;
        title: string;
        company: string;
        logo: string;
        location: string;
        type: string;
        time: string;
        promoted: boolean;
        applicants: number;
    };
}

export default function JobCard({ job }: JobProps) {
    return (
        <View className="flex-row gap-3 py-4 border-b border-border bg-card px-4">
            <Image
                source={{ uri: job.logo }}
                className="w-12 h-12"
                resizeMode="contain"
            />

            <View className="flex-1">
                <View className="flex-row justify-between items-start">
                    <Text className="font-bold text-base text-foreground flex-1 pr-2">{job.title}</Text>
                    <TouchableOpacity>
                        <MaterialIcons name="close" size={20} className="text-muted-foreground" />
                    </TouchableOpacity>
                </View>

                <Text className="text-sm text-foreground mb-1">{job.company}</Text>
                <Text className="text-xs text-muted-foreground mb-1">
                    {job.location} ({job.type})
                </Text>

                {job.promoted && (
                    <View className="self-start mb-1">
                        <Text className="text-xs text-muted-foreground">Promoted • {job.applicants} applicants</Text>
                    </View>
                )}

                {!job.promoted && (
                    <Text className="text-xs text-green-700 font-medium mb-1">{job.time}</Text>
                )}

            </View>
        </View>
    );
}
