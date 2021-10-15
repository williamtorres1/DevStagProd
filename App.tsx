import React, {Fragment} from 'react';
import {NativeModules, StatusBar, StyleSheet, Text, View} from 'react-native';
const App = () => {
  const env = NativeModules.RNConfig.env;

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor="#999" />
      <View style={styles.container}>
        <Text style={styles.title}>You're in {env} environment</Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
});
export default App;
