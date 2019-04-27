import React, { Component } from "react";
import { AppRegistry, Text, View, Alert, Button } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Greeting from "./App/components/index";
import { dataFormatter } from "./App/utils/index";
import DetailsScreen from "./App/components/detailScreen";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ id: "one", key: "one" }]
    };
  }
  onPressButton = () => {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => res.json())
      .then(response => this.setState({ data: dataFormatter(response) }));
  };

  render() {
    let pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };
    return (
      <View style={{ alignItems: "center", top: 50 }}>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
        <Greeting
          name="Prabhat"
          pic={pic}
          onPressButton={this.onPressButton}
          data={this.state.data}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
