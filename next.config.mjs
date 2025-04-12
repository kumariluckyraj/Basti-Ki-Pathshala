/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'plus.unsplash.com',
        'images.unsplash.com',
        'media.istockphoto.com',
        'img.icons8.com',
        'encrypted-tbn0.gstatic.com', // ✅ Add this
      ],
    },
  };
  
  export default nextConfig;
  