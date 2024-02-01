// types.tsx

// input types

export type InputProps = {
    type?: string
    placeholder?:string
    name?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    size?: 'sm' | 'md' | 'lg'
}

// button types

export type ButtonProps = {
    size?: 'sm' | 'md' | 'lg'
    type?: "button" | "reset" | "submit" | undefined;
    text?: string
    className?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    loading?: boolean
    themeColor?: string
    icon?: React.ReactNode

}

// page heading types

export type PageHeadingProps = {
    title?: string
    subTitle?: string
    className?: string
}

// sections types

export type SectionProps = {
    children?: React.ReactNode
    className?: string
    bottomSpacing?: string
}