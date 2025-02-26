import { compose, VariantProps } from "@busbud/tailwind-buddy";

type ComposeType = {
  "slots": ["root"],
  variants: {
    variant: ["red", "blue"]
  },
  props: {
    isDisabled: boolean,
  },
  screens: []
}

export const templateVariants = compose<ComposeType>({
    slots: {
        "root": /** @tw */ "p-4"
    },
    variants: {
        variant: {
            "red": "bg-red-500",
            "blue": "bg-blue-500"
        }
    },
    defaultVariants: {
        variant: "red"
    }
})

// export type so we can use it in the component after
export type TemplateProps = VariantProps<ComposeType["variants"]> & ComposeType["props"];