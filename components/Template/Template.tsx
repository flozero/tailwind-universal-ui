import { Text, View } from "react-native"
import { templateVariants, TemplateProps } from "./Template.definition"

export const Template = (props: TemplateProps) => {

    const { slots: { root }} = templateVariants

    return (
        <View className={root(props)}>
            <Text className="">
                Template
            </Text>
        </View>
    )
}