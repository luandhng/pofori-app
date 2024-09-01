interface Props {
  text: string;
  href: string;
}

export const Link = ({ text, href }: Props) => {
  return (
    <a className="hover:underline" href={href}>
      {text}
    </a>
  );
};
