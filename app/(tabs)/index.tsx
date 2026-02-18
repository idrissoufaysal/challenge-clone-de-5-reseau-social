import { Image } from 'expo-image';
import { View, FlatList, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { chats } from '@/data/chats';
import ChatRow from '@/components/ChatRow';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { Button, Input, TextField } from 'heroui-native';


const text = ['Toutes', 'Non lues', 'Favoris', 'Groupes', 'Supprimés']

export default function ChatsScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: theme.background, paddingBottom: 10 , position: 'relative'}}>
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
            {text.map((item, index) => (
              <TouchableOpacity key={index} className={`px-2 py-1 border border-gray-400 rounded-full ${index === 0 ? 'bg-green-100' : ''}`}><Text>{item}</Text></TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={[styles.container, { backgroundColor: theme.background,marginBottom: 50 }]}>
        <FlatList
          data={chats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ChatRow item={item} />}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
        <View className='absolute bottom-6 right-6'>
          <Button isIconOnly className='w-14 h-14 bg-green-500 rounded-2xl items-center justify-center shadow-lg'>
            <MaterialIcons name="chat" size={24} color="white" />
          </Button>
        </View>
        <View className=' bottom-6 right-6'>
          <Button  className='w-14 h-14 bg-green-500 rounded-2xl items-center justify-center shadow-lg'>
            <Text>hello</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
