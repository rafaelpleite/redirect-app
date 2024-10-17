/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: 'https://nathanraony.online/paz-church-osasco/',
          permanent: true, 
        },
      ];
    },
  };

export default nextConfig;
