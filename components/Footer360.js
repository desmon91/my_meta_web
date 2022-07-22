import Image from "next/image";
export default function Footer360() {
  return (
    <div className="fixed flex justify-center bottom-0 left-0 w-full max-h-8 mb-2">
      <Image
        layout="responsive"
        objectFit="contain"
        width="100%"
        height="100%"
        alt=""
        src="/360.svg"
        className="w-auto h-auto"
      />
    </div>
  );
}
