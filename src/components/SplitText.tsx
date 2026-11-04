import { Children, cloneElement, isValidElement } from "react";
import type { CSSProperties, ElementType, ReactElement, ReactNode } from "react";

type Props = {
  as?: ElementType;
  /** rise: palavra sobe de dentro de uma máscara (títulos). fade: surge com blur (parágrafos). */
  variant?: "rise" | "fade";
  /** Atraso entre palavras, em ms. */
  stagger?: number;
  /** Atraso antes da primeira palavra, em ms. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/**
 * Quebra o texto em palavras, preservando spans de destaque (cor etc.).
 * A entrada é CSS puro (globals.css); o RevealObserver só adiciona .is-in.
 */
export default function SplitText({
  as: Tag = "p",
  variant = "rise",
  stagger = variant === "rise" ? 45 : 16,
  delay = 0,
  className = "",
  style,
  children,
}: Props) {
  let i = 0;

  const split = (node: ReactNode): ReactNode => {
    if (typeof node === "string" || typeof node === "number") {
      return String(node)
        .split(/(\s+)/)
        .map((part) => {
          if (!part) return null;
          if (/^\s+$/.test(part)) return " ";
          const n = i++;
          return (
            <span key={n} className="w">
              <span style={{ ["--i" as string]: n } as CSSProperties}>{part}</span>
            </span>
          );
        });
    }
    if (isValidElement(node)) {
      const el = node as ReactElement<{ children?: ReactNode }>;
      if (el.type === "br" || el.props.children == null) return el;
      return cloneElement(el, undefined, Children.map(el.props.children, split));
    }
    return node;
  };

  return (
    <Tag
      className={`split split-${variant} ${className}`}
      style={{ ...style, ["--stagger" as string]: `${stagger}ms`, ["--delay" as string]: `${delay}ms` } as CSSProperties}
    >
      {Children.map(children, split)}
    </Tag>
  );
}
