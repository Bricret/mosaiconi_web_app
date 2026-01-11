import {
  LayoutDashboard,
  Boxes,
  ShoppingBasket,
  Users,
  Settings,
} from "lucide-react";

export const ROUTES = {
  user: {
    name: "Angela Herrera",
    username: "Angelita",
    avatar: "/images/userProfile.jpeg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "GO - Ventas",
      url: "/admin/groups",
      icon: Boxes,
    },
    {
      title: "Pedidos",
      url: "/admin/orders",
      icon: ShoppingBasket,
    },
    {
      title: "Clientes",
      url: "/admin/clients",
      icon: Users,
    },
  ],
  navSecondary: [
    {
      title: "Ajustes",
      url: "/admin/settings",
      icon: Settings,
    },
    //! Funcionalidades futuras
    // {
    //   title: "Get Help",
    //   url: "#",
    //   icon: IconHelp,
    // },
    // {
    //   title: "Search",
    //   url: "#",
    //   icon: IconSearch,
    // },
  ],
};
