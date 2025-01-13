import Link from "next/link";

interface ILinkBack {
  href: string;
  content?: string;
}

export default function LinkBack({ href = "/", content = "Back" }: ILinkBack) {
  return (
    <div className="mb-5">
      <Link href={href}>&larr; {content}</Link>
    </div>
  );
}
