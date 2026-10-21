import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLocalizedTo } from "@/i18n/context";

interface SmartLinkProps {
  /** Route to open. Omit to target a section on the home page. */
  to?: string;
  /** Section on the target page, e.g. "#contact". */
  hash?: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
  "aria-current"?: "page";
}

/**
 * On the home page, home sections are plain #anchors (native smooth scroll, no router work).
 * Anywhere else, they become router links back to "/#section".
 */
export default function SmartLink({ to = "/", hash = "", children, ...rest }: SmartLinkProps) {
  const { pathname } = useLocation();
  const localized = useLocalizedTo();

  if (to === pathname && hash) {
    return (
      <a href={hash} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link to={localized(to, hash)} {...rest}>
      {children}
    </Link>
  );
}
