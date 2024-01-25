import SocialNetwork from "../socialNetwork";

function Footer() {
  return (
    <footer className="w-screen flex justify-between items-between pb-3 text-title px-10">
      <div className="flex flex-col pointer-events-none">
        <span className="font-extrabold text-2xl max-md:text-4xl">
          SpotiClient
        </span>
        <p className="max-md:text-2xl">All rights reserved © 2023</p>
      </div>
      <div className="flex font-bold items-center justify-center">
        <span>Follow the creator:&emsp;</span>
        <SocialNetwork />
      </div>
    </footer>
  );
}

export default Footer;
