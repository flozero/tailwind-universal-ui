import { compose, VariantProps } from "@busbud/tailwind-buddy";
import { Pressable } from "react-native";

interface Props extends React.ComponentPropsWithoutRef<typeof Pressable> {
  text?: string;
  className?: string;
  disabled?: boolean;
}

type ComposeType = {
  "slots": ["root", "text"],
  variants: {
    variant: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    size: ["default", "sm", "lg", "icon"]
  },
  props: Props,
  screens: []
}

export const buttonVariants = compose<ComposeType>({
  slots: {
    root: /** @tw */ "group flex items-center justify-center rounded-md web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2",
    text: /** @tw */ "web:whitespace-nowrap text-sm native:text-base font-medium web:transition-colors",
  },
  variants: {
    variant: {
      default: {
        "root": /** @tw */ "bg-primary web:hover:opacity-90 active:opacity-90",
        "text": /** @tw */ "text-primary-foreground"
      },
      destructive: {
        "root": /** @tw */ "bg-destructive web:hover:opacity-90 active:opacity-90",
        "text": /** @tw */ "text-destructive-foreground",
      },
      outline: {
        "root": /** @tw */ "border border-input bg-background web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent",
        "text": /** @tw */ "group-active:text-accent-foreground"
      },
      secondary: {
        "root": /** @tw */ "bg-secondary web:hover:opacity-80 active:opacity-80",
        text: /** @tw */ "text-secondary-foreground group-active:text-secondary-foreground"
      },
      ghost: {
        "root": /** @tw */ "web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent",
        "text": /** @tw */ "group-active:text-accent-foreground"
      },
      link: {
        "root": /** @tw */ "web:underline-offset-4 web:hover:underline web:focus:underline",
        "text": /** @tw */ "text-primary group-active:underline"
      }
    },
    size: {
      default: {
        "root": /** @tw */ "h-10 px-4 py-2 native:h-12 native:px-5 native:py-3",
      },
      sm: {
        "root": /** @tw */ "h-9 rounded-md px-3",
      },
      lg: {
        "root": /** @tw */ "h-11 rounded-md px-8 native:h-14",
        "text": /** @tw */ "native:text-lg"
      },
      icon: {
        "root": /** @tw */ "h-10 w-10",
      }
    },
  },
  compoundVariants: [
    {
      "classes": {
        root: "opacity-50 web:pointer-events-none"
      },
      "conditions": {
        disabled: true
      }
    }
  ],
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
  }
);

export type ButtonProps = VariantProps<ComposeType["variants"]> & Props;
