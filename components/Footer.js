import Image from "next/image";
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
            width="100%"
            height="100%"
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
            width="100%"
            height="100%"
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
            width="100%"
            height="100%"
            src={"/email.svg"}
            alt="Email"
            className="w-5 h-5 m-2"
          />
        </a>
      </div>
      <div className="w-1/2 text-center">©2022 Made by Desmond Kristian</div>
    </div>
  );
}
