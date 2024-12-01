import { cn } from '@/utils/helper';
import Link, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'


interface IProps extends LinkProps {
    children: ReactNode;
    linkType?: "primary" | "secondary" | "link" | "none";
    className?: string
}

const styled = {
  baseStyled: "px-6 py-2 rounded-full inline block text-sm cursor-pointer",
  primary: "bg-zinc-100 rounded-full flex justify-center items-center text-zinc-900 ",
  secondary: "border border-zinc-700 hover:bg-zinc-700 justify-center",
  link: "text-zinc-400 hover:text-zinc-50 hover:underline",
  none: "px-0"
}

 export const CustomLink = ({children, linkType = "primary", className, ...props}: IProps) => {
  return (
    <Link {...props} className={cn(linkType !== "link" && styled.baseStyled, styled[linkType] ,className)}>{children}</Link>
  )
}

export default CustomLink
