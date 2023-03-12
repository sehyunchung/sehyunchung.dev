import { MDXComponents } from "mdx/types";

function H1({ children }: { children: React.ReactNode }) {
  return <h1>{children}</h1>;
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2>{children}</h2>;
}

export const useMDXComponents = (components: MDXComponents) => {
  return { h1: H1, h2: H2, ...components };
};
