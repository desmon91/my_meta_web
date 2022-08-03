import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="w-screen h-20 my-10 flex flex-col justify-center items-center">
      <div className="flex justify-center w-1/2">
        <a
          href="https://www.linkedin.com/in/desmond-kristian-84aa92129/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width="20px"
            height="20px"
            src={"/linkedin.svg"}
            alt="Linkedin"
            className="w-5 h-5 m-2"
          />
        </a>
        <a
          href="https://www.instagram.com/desmondsiahaan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width="20px"
            height="20px"
            src={"/instagram.svg"}
            alt="Instagram"
            className="w-5 h-5 m-2"
          />
        </a>
        <a
          href="mailto:desmon.kristian@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width="20px"
            height="20px"
            src={"/email.svg"}
            alt="Email"
            className="w-5 h-5 m-2"
          />
        </a>
      </div>
      <Link href="/">
        <a className="w-1/2 text-center text-orange-500 hover:text-slate-900">
          ©2022 Made by Desmond Kristian
        </a>
      </Link>
    </div>
  );
}
