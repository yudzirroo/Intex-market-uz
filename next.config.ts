import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { API } from './service/hooks/getEnv';
 
const nextConfig: NextConfig = {
    images: {
    domains: ['13.61.23.60'],
  },
};
 

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);