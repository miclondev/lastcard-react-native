import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
//import Lottie from 'lottie-react-native';

class Loading extends Component {
  componentDidMount() {
    this.animation.play();
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <View style={styles.main}>
        {/* <Lottie
                    ref={animation => {
                        this.animation = animation;
                    }}
                    style={{
                        width: 400,
                        height: 400,
                    }}
                    source={require('../../assets/1854-loading-02.json')}
                /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E2633'
  }
});

export default Loading;
