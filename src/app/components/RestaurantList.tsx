import { MenuItem } from "../data/types";
import Image from "next/image";
interface RestaurantListProps {
    items: MenuItem[];
    onAddToOrder: (item: MenuItem) => void;
    openModal: (item: MenuItem) => void;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ items, onAddToOrder, openModal }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow flex flex-col items-cente">
                    <Image onClick={() => openModal(item)} width={100} height={100} src={item.image} alt={item.name} className="object-cover w-full h-48 rounded-lg mb-2 cursor-pointer" />
                    <h2 className="text-xl font-semibold text-center">{item.name}</h2>
                    <p className="text-gray-600 text-center">{item.description}</p>
                    <p className="text-gray-800 font-bold text-center">${item.price}</p>
                    <button
                        onClick={() => onAddToOrder(item)}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                        Add to Order
                    </button>
                </div>
            ))}
            
        </div>
    );
};

export default RestaurantList;
