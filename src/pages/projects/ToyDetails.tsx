import { Link } from "react-router-dom";

export default function ToyDetails() {
  return (
    <div
      className="min-h-screen p-8 text-white"
      style={{
        background: `linear-gradient(
          135deg,
          rgba(8, 13, 32, 0.8),
          rgba(5, 8, 24, 0.9),
          rgba(23, 37, 84, 0.8)
        )`,
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Toy Chamber</h1>
        <Link
          to="/"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition"
        >
          Home
        </Link>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:scale-105 transition">
          <img
            src="https://res.cloudinary.com/dta2gcxsl/image/upload/v1756725378/alltoy_gnsg6t.jpg"
            alt="Feature One"
            className="rounded-lg mb-4 w-full h-80 object-fit"
          />
          <h2 className="text-xl font-semibold mb-2">All Toy</h2>
          <p className="text-sm text-gray-200">
            User can view all information of toy from this page!
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:scale-105 transition">
          <img
            src="https://res.cloudinary.com/dta2gcxsl/image/upload/v1756725378/categi_ztdt6z.jpg"
            alt="Feature Two"
            className="rounded-lg mb-4 w-full h-80 object-fit"
          />
          <h2 className="text-xl font-semibold mb-2">Sub Category</h2>
          <p className="text-sm text-gray-200">
            User can view all category of toys by filtering!
          </p>
        </div>
      </div>
    </div>
  );
}
