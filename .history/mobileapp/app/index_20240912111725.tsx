import { Text, View } from "react-native";
import Button from "@/components/atoms/Button"
import Label from "@/components/atoms/Label";
import InputForm from "@/components/molecules/InputForm";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Text style={{ fontSize:50 
      }}>Welcome to my app!</Text>
      <Button buttonTitle="I'm a button!"/>
      <Label labelText="I'm a label"/> */}

      <InputForm
        labelText="Button Label"
        
      />

    </View>
  );
}
