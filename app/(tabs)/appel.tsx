import React from 'react'
import { Text, View } from 'react-native'
import { ThemedView } from '@/components/themed-view'
import { Button } from 'heroui-native'

export default function appel() {
  return (
    <View className='bg-[#077412] flex-1 justify-center items-center'>
      <Text>appel</Text>
      <Button onPress={()=>alert('hello world')}>  
       Ajouter
      </Button>
    </View>
  )
}