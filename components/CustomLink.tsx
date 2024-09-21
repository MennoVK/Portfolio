import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";


export const linkStyles = tv({
    variants: {
        underline: {
            true: "after:scale-x-100 relative inline-block w-fit after:transition-transform after:absolute after:w-full after:h-1 after:bg-current after:bottom-0 after:left-0 after:hover:scale-x-100 sm:after:scale-x-0 after:origin-bottom-right after:hover:origin-bottom-left",
        },
        active: {
            true: "sm:after:scale-x-100 sm:after:hover:scale-x-0 after:origin-bottom-left after:hover:origin-bottom-right" ,
        },
    },
});

export interface CustomLinkprops extends LinkProps {
    target?: "_blank" | "_self" | "_parent" | "_top",
    underline?: boolean
    active?: boolean;
    prefetch?: boolean;
    className?: string,
    children?: ReactNode;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
}

export const CustomLink = ({href, target, prefetch = false, onClick, onMouseEnter, onMouseLeave, className, underline, active, children}: CustomLinkprops) => {
    return (
        <Link
            href={href}
            target={target}
            prefetch={prefetch}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={clsx(className, linkStyles({underline, active}))}>
            {children}
        </Link>
    )
}