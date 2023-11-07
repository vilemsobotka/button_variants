import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
    base: "px-4 py-1.5 rounded-full hover:opacity-80",
    variants: {
        type: {
            square: 'rounded-none bg-gray-500 text-white hover:bg-gray-700',
            rounded: 'rounded-sm bg-gray-500 text-white hover:bg-gray-700',
            oblong: 'rounded-full bg-gray-500 text-white hover:bg-gray-700',
            white: 'rounded-sm border-1 border-gray-700 hover:border-none bg-white text-black hover:bg-gray-700 hover:text-white'
        }
    }
})
type ButtonVariants = VariantProps<typeof button>

export interface ButtonProps extends ButtonVariants {
    children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
    return <button className={button(props)}>{props.children}</button>;
};