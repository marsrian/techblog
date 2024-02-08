import CategoryByPost from "@/components/CategoryByPost";
import Link from "next/link";

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

const CategoryPage = async ({ searchParams }) => {
  const { allTechs } = await getSingleTech();
  return (
    <div className="">
      <h3 className="font-bold text-3xl text-center mb-8">
        <Link href="/" className=" text-blue-500">
          Home
        </Link>{" "}
        » Archive by category &apos;
        {searchParams.category}&apos;
      </h3>
      <div className="col-span-1 md:col-span-4 flex flex-col gap-2">
        {allTechs
          .filter((tech) => tech.category === `${searchParams.category}`)
          .map((tech) => (
            <CategoryByPost tech={tech} key={tech._id} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPage;
