import React, { FC } from 'react'

type Props = {
}

export const CheckboxSelected: FC<Props> = (props: Props) => {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="63" height="63" rx="11.5" fill="white" stroke="black" />
            <path d="M19.9367 34.4274L7.79424 25.3594C6.05221 24.0585 3.77819 26.0796 4.86567 27.9623L19.6648 53.5828C20.35 54.769 21.998 54.9308 22.9008 53.9005L54.2602 18.1146C55.7959 16.3621 53.6025 13.8447 51.6563 15.126L22.2331 34.4955C21.5297 34.9586 20.6115 34.9314 19.9367 34.4274Z" fill="#008B16" />
        </svg>

    )
}