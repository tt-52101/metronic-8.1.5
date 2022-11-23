import isAuthenticatedGuard from "../../router";
const SuperAdminMenu = [
  {
    heading: "Super Admin Role",
    route: "/superAdmin",
    beforeEnter: isAuthenticatedGuard,
    pages: [
      {
        sectionTitle: "Organizations",
        route: "/pages",
        svgIcon: "media/icons/duotune/art/art003.svg",
        fontIcon: "bi-archive",
        beforeEnter: isAuthenticatedGuard,
        sub: [
          {
            heading: "Create an Organization",
            route: "/organizations/create-organizations",
          },
          {
            heading: "Password Change",
            route: "/organizations/password-reset",
          },
          {
            heading: "Edit Organization Details",
            route: "/organizations/edit-details",
          },
        ],
      },
      {
        sectionTitle: "Super User Options",
        route: "/pages",
        svgIcon: "media/icons/duotune/communication/com006.svg",
        fontIcon: "bi-archive",
        sub: [
          {
            heading: "Super User Creation",
            route: "/admin-role/super-adminuser/creation",
          },
          {
            heading: "Super User Password reset",
            route: "/admin-role/super-adminuser/change-password",
          },
          {
            heading: "Edit Super user details",
            route: "/admin-role/super-adminuser/details",
          },
        ],
      },
      {
        sectionTitle: "IT Pool",
        route: "/pages",
        svgIcon: "media/icons/duotune/general/gen022.svg",

        fontIcon: "bi-archive",
        sub: [
          {
            heading: "Ticket Spool",
            route: "/crafted/pages/profile/projects",
          },
          {
            heading: "Request Pending for Approval",
            route: "/crafted/pages/profile/connections",
          },
        ],
      },
    ],
  },
];

export default SuperAdminMenu;
