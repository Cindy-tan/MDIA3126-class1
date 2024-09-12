import { Text, View } from "react-native";
import Button from "@/components/atoms/Button"
import Label from "@/components/atoms/Label";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize:50 
      }}>Welcome to my app!</Text>
      <Button buttonTitle={"I'm a button!"}/>
    </View>
  );
}
