import { View, Text, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#111",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 22, marginBottom: 20 }}>
        Outfit Rotation 👕
      </Text>

      <Pressable
        style={{
          backgroundColor: "#333",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white" }}>Generate Outfit</Text>
      </Pressable>
    </View>
  );
}