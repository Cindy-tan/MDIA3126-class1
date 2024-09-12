import { View } from "react-native";
import Button from "@/atoms/Button";

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