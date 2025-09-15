import tiktechshopImg from "../../assets/tiktechshop.png";

export default function TikTechShop() {
  return (
    <a
      href="https://tik-tech-shop.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-2xl shadow hover:shadow-lg transition p-6"
    >
      <div className="h-40 bg-gray-200 rounded-md flex items-center justify-center mb-4">
        <img
          src={tiktechshopImg}
          alt="TikTechShop Screenshot"
          className="h-full object-contain rounded-md"
        />
      </div>
      <h3 className="text-lg font-semibold">TikTech Shop</h3>
      <p className="text-sm text-gray-600">
        An e-commerce platform for watch products with integrated backend and frontend deployment.
      </p>
    </a>
  );
}
