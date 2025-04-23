import MENU from "@/constants/menu";

const MenuDesktopComponent = () => {
  return (
    <nav className="max-md:hidden">
      <ul className="flex gap-5 justify-center">
        {MENU.map((item, i) => (
          <li key={i}>
            <a
              href={`#${item.value}`}
              className="uppercase text-xs md:hover:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuDesktopComponent;
