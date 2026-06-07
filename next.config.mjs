/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    position: "bottom-right",
  },
  async rewrites() {
    return [
      { source: "/proyectos", destination: "/" },
      { source: "/sobre-mi", destination: "/" },
      { source: "/contacto", destination: "/" },
    ];
  },
};

export default nextConfig;
