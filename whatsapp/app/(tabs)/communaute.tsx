import { View, Text } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'

export default function communaute() {
  return (
    <ThemedView className='flex-1 justify-center items-center'>
      <ThemedText className='text-green-400'>communaute</ThemedText>
    </ThemedView>
  )
}