import SocialNetwork from "../socialNetwork";

function Footer() {
  return (
    <footer className="w-screen flex justify-between items-between pb-3 text-title px-10 max-lg:px-5 max-lg:flex-col">
      <div className="flex flex-col pointer-events-none">
        <span className="font-extrabold text-2xl max-lg:text-2xl">
          SpotiClient
        </span>
        <p className="max-lg:text-lg text-paragraph">
          All rights reserved © 2023
        </p>
      </div>
      <div className="flex items-center justify-center max-lg:my-2 max-lg:justify-between">
        <span className="max-lg:text-lg">Follow the creator:&emsp;</span>
        <SocialNetwork />
      </div>
    </footer>
  );
}

export default Footer;
