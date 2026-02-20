import React from 'react'
import { Text, View } from 'react-native'
import { ThemedView } from '@/components/themed-view'
import { Button } from 'heroui-native'

export default function appel() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Button onPress={() => alert('hello world')}>
        <Text className='text-white'>
          Appeler
        </Text>
      </Button>
    </View>
  )
}