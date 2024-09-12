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
                placeholderTextColor={
                    
                }
            />
            <Button buttonTitle={buttonTitle}/>
        </View>
    )
}


// placeholder
// The string that will be rendered before text input has been entered.

// Type
// string
// placeholderTextColor
// The text color of the placeholder string.

// Type
// color