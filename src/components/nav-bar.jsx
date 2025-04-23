import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";

const AppNavbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <Link className="font-bold text-inherit" to="/">
          MemeBook
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem isActive={location.pathname === "/table"}>
          <Link to="/table">Таблиця</Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/list"}>
          <Link to="/list">Список</Link>
        </NavbarItem>
      </NavbarContent>

      {/* Тогглер для мобильного меню */}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />

      {/* Меню на мобилке */}
      <NavbarMenu>
        <NavbarMenuItem isActive={location.pathname === "/table"}>
          <Link className="w-full" to="/table">
            Таблиця
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem isActive={location.pathname === "/list"}>
          <Link className="w-full" to="/list">
            Список
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default AppNavbar;
