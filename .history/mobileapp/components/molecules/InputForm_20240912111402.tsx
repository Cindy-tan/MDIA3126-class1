import { View } from "react-native";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import { TextInput } from "react-native-gesture-handler";

export default function InputForm({ labelText, buttonTitle, placeholderText }) {
    return (
        <View>
            <Label labelText={labelText}/>
            <TextInput
                placeholder={placeholderText}
                placeholderTextColor="blue"
            />
            <Button buttonTitle={buttonTitle}/>
        </View>
    )
}
