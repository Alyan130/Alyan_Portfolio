import Navlink from "./navlink"

type Link = {
    path: string;
    title: string;
  };
  
  type NavOverlayProps = {
    links: Link[];
  };
  
  export default function NavOverlay({ links }: NavOverlayProps) {
    return (
      <ul className="flex flex-col py-4 items-center">
        {links.map((link, index) => (
          <li key={index}>
            <Navlink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    );
  }
  