"use client";

import "./Sidebar.css";
import logo from "@/assets/logos/logo.svg";
import { MainLayoutContext } from "@/context/MainLayoutContext";
import { cn } from "@/utils/cn";
import { Icon } from "@iconify/react";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";

// Sidebar Links
const adminLinks = [
  {
    id: "dashboard",
    icon: "ic:outline-dashboard",
    route: "/admin/dashboard",
    label: "Dashboard",
  },
  {
    id: "account-details",
    icon: "heroicons:users",
    route: "/admin/account-details",
    label: "Account Details",
  },
  {
    id: "earnings",
    icon: "lucide:hand-coins",
    route: "/admin/earnings",
    label: "Earnings",
  },
  {
    id: "manage-gallery",
    icon: "solar:gallery-outline",
    route: "/admin/manage-gallery",
    label: "Manage Gallery",
  },
  // {
  //   id: "manage-gallery",
  //   icon: "icon-park-outline:message",
  //   route: "/admin/message",
  //   label: "Message",
  // },
  {
    id: "settings",
    icon: "si:settings-fill",
    route: "/admin/settings",
    label: "Settings",
  },
];

const hotelLinks = [
  {
    id: "dashboard",
    icon: "ic:outline-dashboard",
    route: "/hotel/dashboard",
    label: "Dashboard",
  },
  {
    id: "bookings",
    icon: "lsicon:calendar-outline",
    route: "/hotel/bookings",
    label: "Bookings",
  },
  {
    id: "earnings",
    icon: "lucide:hand-coins",
    route: "/hotel/earnings",
    label: "Earnings",
  },
  {
    id: "hotel-management",
    icon: "carbon:hotel",
    route: "/hotel/hotel-management",
    label: "Hotel Management",
  },
  {
    id: "message",
    icon: "icon-park-outline:message",
    route: "/hotel/message",
    label: "Message",
  },
  {
    id: "settings",
    icon: "si:settings-fill",
    route: "/hotel/settings",
    label: "Settings",
  },
];

const apartmentLinks = [
  {
    id: "dashboard",
    icon: "ic:outline-dashboard",
    route: "/apartment/dashboard",
    label: "Dashboard",
  },
  {
    id: "bookings",
    icon: "lsicon:calendar-outline",
    route: "/apartment/bookings",
    label: "Bookings",
  },
  {
    id: "earnings",
    icon: "lucide:hand-coins",
    route: "/apartment/earnings",
    label: "Earnings",
  },
  {
    id: "apartment-management",
    icon: "carbon:hotel",
    route: "/apartment/apartment-management",
    label: "Apartment Management",
  },
  {
    id: "message",
    icon: "icon-park-outline:message",
    route: "/apartment/message",
    label: "Message",
  },
  {
    id: "settings",
    icon: "si:settings-fill",
    route: "/apartment/settings",
    label: "Settings",
  },
];

const SidebarContainer = () => {
  const { sidebarCollapsed: collapsed } = useContext(MainLayoutContext);
  // const dispatch = useDispatch();
  const router = useRouter();
  const path = usePathname();
  const userRole = path.split("/")[1] || ""; // hotel | apartment | admin

  // Logout handler
  const onClick = (e) => {
    // if (e.key === "logout") {
    //   dispatch(logout());
    //   router.refresh();
    //   router.push("/login");

    //   Success_model({ title: "Logout successful" });
    // }

    console.log("logout success");
  };

  // Admin Sidebar Links
  const adminSidebarLinks = [
    ...adminLinks.map((link) => ({
      key: link.id,
      icon: <Icon icon={link.icon} height={25} width={25} />,
      label: (
        <Link href={link.route} className="flex-center-between">
          {link.label}

          {link.id === "settings" && (
            <Icon icon="ri:arrow-right-s-line" height={25} width={25} />
          )}
        </Link>
      ),
    })),
    {
      key: "logout",
      icon: <Icon icon="ri:logout-circle-line" height={25} width={25} />,
      label: <Link href="/login">Logout</Link>,
    },
  ];

  // Hotel Sidebar Links
  const hotelSidebarLinks = [
    ...hotelLinks.map((link) => ({
      key: link.id,
      icon: <Icon icon={link.icon} height={25} width={25} />,
      label: (
        <Link href={link.route} className="flex-center-between">
          {link.label}

          {link.id === "settings" && (
            <Icon icon="ri:arrow-right-s-line" height={25} width={25} />
          )}
        </Link>
      ),
    })),
    {
      key: "logout",
      icon: <Icon icon="ri:logout-circle-line" height={25} width={25} />,
      label: <Link href="/login">Logout</Link>,
    },
  ];

  // Hotel Sidebar Links
  const apartmentSidebarLinks = [
    ...apartmentLinks.map((link) => ({
      key: link.id,
      icon: <Icon icon={link.icon} height={25} width={25} />,
      label: (
        <Link href={link.route} className="flex-center-between">
          {link.label}

          {link.id === "settings" && (
            <Icon icon="ri:arrow-right-s-line" height={25} width={25} />
          )}
        </Link>
      ),
    })),
    {
      key: "logout",
      icon: <Icon icon="ri:logout-circle-line" height={25} width={25} />,
      label: <Link href="/login">Logout</Link>,
    },
  ];

  // Get current path for sidebar menu item `key`
  const currentPathname = usePathname()
    ?.replace(`/${userRole}/`, "")
    ?.split(" ")[0];

  return (
    <Sider
      width={320}
      theme="light"
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        backgroundColor: "white",
        maxHeight: "100vh",
        overflow: "auto",
      }}
      className="scroll-hide"
    >
      <div
        style={{
          height: 80,
          borderBottom: "1px solid lightGray",
        }}
      >
        <Link
          href={`/${userRole}/dashboard`}
          className="flex h-full items-center px-2"
        >
          <Image
            src={logo}
            alt="Logo of DAYF Booking"
            height={900}
            width={900}
            className={cn("w-auto", collapsed ? "h-[80px]" : "h-[50px]")}
          />
        </Link>
      </div>

      <Menu
        onClick={onClick}
        defaultSelectedKeys={[currentPathname]}
        mode="inline"
        className="sidebar-menu space-y-2 !border !border-none !border-red-400 !bg-transparent !px-2 !pt-4"
        items={
          userRole === "admin"
            ? adminSidebarLinks
            : userRole === "hotel"
              ? hotelSidebarLinks
              : userRole === "apartment" && apartmentSidebarLinks
        }
      />
    </Sider>
  );
};

export default SidebarContainer;
