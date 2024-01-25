import cs from "classnames";
import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";

interface SocialNetworkProps {
  containerClass?: string;
}

function SocialNetwork(props: SocialNetworkProps) {
  const { containerClass = "" } = props;

  return (
    <div
      className={cs({
        "w-40 flex justify-between text-4xl": true,
        [containerClass]: !!containerClass,
      })}
    >
      <a
        href="https://www.linkedin.com/in/fabiangzvo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="linkedin"
      >
        <FaLinkedin className="cursor-pointer text-text" />
      </a>
      <a
        href="https://twitter.com/fabiangzvo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="twitter"
      >
        <FaXTwitter className="cursor-pointer text-text" />
      </a>
      <a
        href="https://github.com/fabiangzvo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github"
      >
        <FaGithub className="cursor-pointer text-text" />
      </a>
    </div>
  );
}

export default SocialNetwork;
