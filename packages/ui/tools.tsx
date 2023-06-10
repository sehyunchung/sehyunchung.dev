import * as React from "react";

/**
 * # `stringDigger`⛏️
 *
 * Extract text from children
 * @param {React.ReactNode} children
 * @returns {string} The text from children
 */
export function stringDigger(children: React.ReactNode): string {
  if (Array.isArray(children)) {
    return children.map(stringDigger).join(" ");
  }

  if (React.isValidElement(children) && children.props.children !== undefined) {
    return stringDigger(children.props.children);
  }

  if (typeof children === "string" || typeof children === "number") {
    return children.toString();
  }

  return "";
}
