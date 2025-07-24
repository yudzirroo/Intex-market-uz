import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ru", "uz"],

  // Used when no locale matches
  defaultLocale: "uz",
});
