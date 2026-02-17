import { Image } from 'expo-image';
import { View, FlatList, StyleSheet, Text, ScrollView } from 'react-native';
import { chats } from '@/data/chats';
import ChatRow from '@/components/ChatRow';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { Input } from 'heroui-native';


const text=['Toutes','Non lues','Favoris','Groupes','Supprimés']

export default function ChatsScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: theme.background,paddingBottom:10 }}>
        <View className='flex-row px-4 py-4 justify-between items-center'>
          <Text className='text-2xl font-bold text-green-500'>Whatsapp</Text>
          <View className='flex-row items-center gap-6'>
            <MaterialIcons name="photo-camera" size={24} color="black" />
            <Entypo name="dots-three-vertical" size={24} color="black" />
        </View>
      </View>
      <View className='w-[380px] mx-auto mb-3'>
        <Input className='w-full' placeholder="Enter la recherche" />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className='flex-row items-center gap-4 px-4'>
          {text.map((item,index)=>(
            <Text key={index} className='px-2 py-1 border border-gray-400 rounded-full'>{item}</Text>
          ))}
        </View>
      </ScrollView>
</View>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <FlatList
          data={chats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ChatRow item={item} />}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
