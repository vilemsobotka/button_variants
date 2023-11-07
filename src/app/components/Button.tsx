import { tv, type VariantProps } from "tailwind-variants";
import { twMerge } from 'tailwind-merge';
export const button = tv({
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
    return <button className={twMerge(button(props), "px-4 py-1.5 rounded-full hover:opacity-80")}>{props.children}</button>;
};