import { useColorScheme } from '@/hooks/use-color-scheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const text = ['Toutes', 'Non lues', 'Favoris', 'Groupes', 'Supprimés']

import PostCard from '@/components/PostCard';
import { posts } from '@/data/posts';
import {
  createStaticNavigation,
  useNavigation,
  DrawerActions
} from '@react-navigation/native';
import React from 'react';

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator({
  drawerContent: (props) => <CustomDrawerContent {...props} />,
  screens: {

  },
});

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();


  return (
    <SafeAreaView className="flex-1 bg-[#F3F2EF]">
      <View className="px-4 py-2 bg-white shadow-sm flex-row items-center gap-3">

        <Link href="/profile" asChild>
          <TouchableOpacity>
            <View className="h-9 w-9 rounded-full bg-gray-300 relative">
              <Image
                source={require("@/assets/images/profile/faysal.jpg")}
                className="w-full h-full rounded-full"
              />
              <View className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
            </View>
          </TouchableOpacity>
        </Link>

        <View className="flex-1 bg-gray-100 h-10 rounded items-center flex-row px-2">
          <MaterialIcons name="search" size={20} color="#666" />
          <Text className="text-gray-500 ml-2 text-sm">Search</Text>
        </View>
        <MaterialIcons name="message" size={24} color="#666" />
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
