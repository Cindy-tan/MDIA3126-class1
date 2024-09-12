import { View } from "react-native";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import { TextInput } from "react-native-gesture-handler";

export default function InputForm({ labelText, buttonTitle, placeholderText, placeholderTextColor }) {
    return (
        <View
            style={{
                flexDirection:"row",
                gap: 5,
                alignItems:"center" 
            }}
        >

            <Label labelText={labelText}/>
            <TextInput
                style={{}}
                placeholder={placeholderText}
                placeholderTextColor="blue"
            />
            <Button buttonTitle={buttonTitle}/>
        </View>
    )
}