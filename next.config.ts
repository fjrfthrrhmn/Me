import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['api.microlink.io'],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
