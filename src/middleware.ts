import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(ru|en|de|es|fr|zh)/:path*", "/((?!_next|api|.*\\..*).*)"],
};
