import { Button, View } from 'react-native';
import React from 'react';
import { useAppDispatch } from '../../store/hooks/redux';
import { userSlice } from '../../store/reducers/userSlice';

export function HomeScreen() {
  const { increment } = userSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title='Increment' onPress={() => dispatch(increment(3))} />
    </View>
  );
}
