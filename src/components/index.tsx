export const Emoji = ({
  label,
  children,
  className,
  ...props
}: { label?: string; children?: string } & React.ComponentProps<"span">) => (
  <span
    className={`inline-flex justify-center items-center text-[1.4em] ${className}`}
    role="img"
    aria-label={label ?? ""}
    aria-hidden={label ? "false" : "true"}
    {...props}
  >
    {children}
  </span>
);
