import MENU from "@/constants/menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

const MenuMobileComponent = () => {
  return (
    <div className="md:hidden flex justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Menu />
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-44 rounded-sm bg-bg border-text shadow-md px-3 py-4"
          side="bottom"
        >
          {MENU.map((item, i) => (
            <DropdownMenuItem key={i} className="py-2 hover:!bg-transparent">
              <a
                href={`#${item.value}`}
                className="uppercase flex gap-2 items-center text-sm"
              >
                <item.Icon className="text-secondary" />
                <span className="text-text">{item.label}</span>
              </a>
            </DropdownMenuItem>
          ))}

          <DropdownMenuItem className="py-2 pt-6 hover:!bg-transparent">
            <a
              href="https://wa.me/5553999543869"
              target="__blank"
              className="w-full text-center bg-text py-2 rounded-sm text-xs text-bg"
            >
              BOOK NOW
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MenuMobileComponent;
