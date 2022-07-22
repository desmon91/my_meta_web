export default function Footer() {
  return (
    <div class="w-screen h-20 my-10 flex flex-col justify-center items-center">
      <div class="flex justify-center w-1/2">
        <a
          href="https://www.linkedin.com/in/desmond-kristian-84aa92129/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={"/linkedin.svg"} alt="Linkedin" class="w-5 h-5 m-2" />
        </a>
        <a
          href="https://www.instagram.com/desmondsiahaan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={"/instagram.svg"} alt="Instagram" class="w-5 h-5 m-2" />
        </a>
        <a
          href="mailto:desmon.kristian@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={"/email.svg"} alt="Email" class="w-5 h-5 m-2" />
        </a>
      </div>
      <div class="w-1/2 text-center">©2022 Made by Desmond Kristian</div>
    </div>
  );
}
