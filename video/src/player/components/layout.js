import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Layout = ({video, loading, loader, controls}) => {
  return (
    <View style={styles.container}>
      <View style={styles.video}>{video}</View>
      <View style={styles.overlay}>{loading && loader}</View>
      {controls}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '56.25%',
  },
  video: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    borderStyle: 'dashed',
    borderColor: 'black',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Layout;
