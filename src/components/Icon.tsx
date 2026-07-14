import { cn } from "@/lib/utils";

type IconProps = React.HTMLAttributes<HTMLSpanElement> & {
  name: string;
  filled?: boolean;
  size?: number;
};

export function Icon({ name, filled, size = 24, className, style, ...rest }: IconProps) {
  return (
    <span
      aria-hidden="true"
      {...rest}
      className={cn("material-symbols-outlined leading-none select-none", className)}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' ${size}`,
        ...style,
      }}
    >
      {name}
    </span>
  );
}
