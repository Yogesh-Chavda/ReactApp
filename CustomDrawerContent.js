import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import myimg from './appimg/profileimg.jpg'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <Image
          source={myimg}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f9f9f9'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth:0,
    borderColor:'#000',
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;
