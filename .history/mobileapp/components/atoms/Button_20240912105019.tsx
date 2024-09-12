import { Button, View } from "react-native";

export default function myButton({ buttonTitle }) {
    return (
        <View>
            <Button
                color="red"
                title={buttonTitle}
            />
        </View>
    )
}