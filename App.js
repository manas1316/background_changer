import React, {useState} from 'react';

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
  const [randomColor, setRandomColor] = useState('rgb(32, 0, 126)');

  const changeBg = () => {
    let color =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';

    setRandomColor(color);
  };

  // Resetting the bgc to black
  const reset = () => {
    const blackColor = '#333';

    setRandomColor(blackColor);
  };

  return (
    <>
      {/* Customizing statys bar */}
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        {/* Random color generator button */}
        <TouchableOpacity onPress={changeBg}>
          <Text style={styles.text}>Click Me</Text>
        </TouchableOpacity>
        {/* Reset to black color button */}
        <TouchableOpacity onPress={reset}>
          <Text style={[styles.text, {backgroundColor: '#fff', color: '#000'}]}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    backgroundColor: '#bb2cd9',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#fff',
    borderRadius: 15,
    textTransform: 'uppercase',
    marginBottom: 40,
  },
});
