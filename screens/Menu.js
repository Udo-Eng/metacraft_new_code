import { View,StyleSheet } from 'react-native';
import React from 'react';
import Menu from '../components/home/Menu';

const MenuScreen = () => {
  return (
    <View style={styles.screen}>
      <Menu />
    </View>
  )
}

export default MenuScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 30,
        padding: 16,
      },
})