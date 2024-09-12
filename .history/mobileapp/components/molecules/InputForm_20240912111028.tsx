import { View } from "react-native";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";

export default function InputForm({ labelText, buttonTitle }) {
    return (
        <View>
            <Label labelText={labelText}/>
            <Button
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