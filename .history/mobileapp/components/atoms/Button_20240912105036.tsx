import { Button as NativeButton, View } from "react-native";

export default function Button({ buttonTitle }) {
    return (
        <View>
            <Button
                color="red"
                title={buttonTitle}
            />
        </View>
    )
}