import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Platform,
  FlatList,
  Alert
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  render() {
    return (
      <View style={{ textAlign: "center" }}>
        <Text>Hello {this.props.name}!</Text>
        <Text style={styles.instructions}> {instructions} </Text>
        <Image source={this.props.pic} style={{ width: 193, height: 110 }} />
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({ text })}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text
            .split(" ")
            .map(word => word && "🍕")
            .join(" ")}
        </Text>
        <View style={styles.buttonContainer}>
          <Button onPress={this.props.onPressButton} title="Press Me" />
        </View>
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => (
            <Text style={styles.item} key={item.key}>
              {item.id} {item.name}
            </Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "green"
  },
  instructions: {
    color: "#333333",
    marginBottom: 5
  },
  buttonContainer: {
    margin: 20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
