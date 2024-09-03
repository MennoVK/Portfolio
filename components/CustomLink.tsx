import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";


export const linkStyles = tv({
    variants: {
        underline: {
            true: "relative inline-block w-fit after:transition-transform after:absolute after:w-full after:h-1 after:bg-current after:bottom-0 after:left-0 after:hover:scale-x-100 after:scale-x-0 after:origin-bottom-right after:hover:origin-bottom-left",
        },
        active: {
            true: "after:scale-x-100 after:hover:scale-x-0 after:origin-bottom-left after:hover:origin-bottom-right" ,
        },
    },
});

export interface CustomLinkprops extends LinkProps {
    target?: "_blank" | "_self" | "_parent" | "_top",
    underline?: boolean
    active?: boolean;
    className: string,
    children: ReactNode;
}

export const CustomLink = ({href, target, underline, active, className, children}: CustomLinkprops) => {
    return (
        <Link
            href={href}
            target={target}
            className={clsx(className, linkStyles({underline, active}))}>
            {children}
        </Link>
    )
}