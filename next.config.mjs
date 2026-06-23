/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  async rewrites() {
    return [
      { source: "/proyectos", destination: "/" },
      { source: "/sobre-mi", destination: "/" },
      { source: "/contacto", destination: "/" },
    ];
  },
};

export default nextConfig;
