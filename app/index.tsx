import React from "react";
import Button from "@/components/Button";
import { View, ScrollView } from "react-native";

const index = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        <Button />
        <Button />
        {/**
         * 
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
        <Text style={{ color: "white" }}>Body Default</Text>
         * 
         */}
      </View>
    </ScrollView>
  );
};

export default index;
