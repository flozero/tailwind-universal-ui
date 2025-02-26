import { Pressable, Text } from "react-native"
import { buttonVariants, ButtonProps } from "./Button.definition"
import { cn } from "@/lib/utils"
import { ElementRef, forwardRef } from "react"

const Button = forwardRef<ElementRef<typeof Pressable>, ButtonProps>((props, ref) => {
    const { slots: { root, text }} = buttonVariants
    const { text: textContent, className, ...otherProps } = props

    return (
        <Pressable 
            ref={ref}
            className={cn(root({
                "variant": props.variant,
                "size": props.variant,
                disabled: props.disabled,
                "className": className
            }))}
            role='button'
            {...otherProps}
        >
            <Text className={cn(text({
                "variant": props.variant,
                "size": props.variant,
                disabled: props.disabled,
                className: 'web:pointer-events-none'
            }))}>
                {textContent}
            </Text>
        </Pressable>
    )
})

Button.displayName = 'Button';

export {
    buttonVariants,
    Button
}

export type { ButtonProps };
