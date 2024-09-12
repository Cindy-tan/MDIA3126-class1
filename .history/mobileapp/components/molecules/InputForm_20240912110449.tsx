import { View } from "react-native";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";

export default function Button({ buttonTitle }) {
    return (
        <View>
            <NativeButton
                color="salmon"
                title={buttonTitle}
            />
        </View>
    )
}