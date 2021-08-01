import React, { Component } from "react";
import { Card, Text } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

class Contact extends Component {
  render() {
    return (
      <ScrollView
        style={{
          backgroundColor: "#f5f5f5"
        }}
      >
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
            <Text>1 Nucamp Way</Text>
            <Text>Seattle, WA 98001</Text>
            <Text style={{ marginBottom: 10 }}>U.S.A</Text>
            <Text>Phone:1-206-555-1234</Text>
            <Text>Email: campsite@nucamp.co</Text>
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }

  static navigationOptions = {
    title: "Contact Us"
  };
}

export default Contact;
