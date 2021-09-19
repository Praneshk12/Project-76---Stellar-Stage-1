import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class StarScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                     marginTop:50
                }}>
                <Text>Star Screen!</Text>
            </View>
        )
    }
}