import Image from "next/image";

interface IPictureSize {
  width: string;
  height: string;
}

interface IPicture {
  src: string;
  alt: string;
  width: number;
  height: number;
  style?: IPictureSize;
}

export default function Picture(options: IPicture) {
  return <Image {...options} priority />;
}
