import FeaturedBlogs from "./FeaturedBlogs";

const getSingleTech = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/alltech`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Couldn't get single data");
    }
    return res.json();
  } catch (error) {
    console.log("Error fetching data", error);
  }
};

const Featured = async () => {
  const { allTechs } = await getSingleTech();
  return (
    <div className="mt-10 mb-10">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        ফিচার্ড পোস্ট
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {allTechs
          .filter((tech) => tech.category.includes("Trickbd Notice"))
          .map((tech) => (
            <FeaturedBlogs key={tech._id} tech={tech} />
          ))}
      </div>
    </div>
  );
};

export default Featured;
