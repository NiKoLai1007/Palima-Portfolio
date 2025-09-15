import TikTechShop from "../Projects/Tiktechshop";   // ✅ if index.jsx
import ShopPhone from "../Projects/Shopphone";       // ✅ if index.jsx

export default function Projects() {
return (
    <section>
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">My Projects</h2>
            <div className="grid gap-8 md:grid-cols-3">
                <TikTechShop />
                <ShopPhone />
            </div>
        </div>
        <div className="h-7" /> {/* Add space between sections */}
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">Other Projects</h2>
            <ul className="list-disc list-inside space-y-2">
                    <li>Book Express: Read & Return (VB.Net)</li>
                    <li>CMS</li>
                    <li>Vacuum Bot (Hardware)</li>
            </ul>
        </div>
    </section>
);
}
