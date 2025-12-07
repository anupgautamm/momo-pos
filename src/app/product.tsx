export default function ProductPage() {
    return (
      <div className="px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-10">Our Products</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
            { name: "Momo Combo 1", price: "$12", img: "/img/momo1.jpg" },
            { name: "Momo Combo 2", price: "$15", img: "/img/momo2.jpg" },
            { name: "Momo Combo 3", price: "$18", img: "/img/momo3.jpg" },
            { name: "Momo Combo 4", price: "$20", img: "/img/momo4.jpg" },
          ].map((product) => (
            <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  