import Link from "next/link";
import AllTechPost from "./AllTechPost";
import PaginationControls from "./PaginationControls";

const getAllTechs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/alltech", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Couldn't get data from server");
    }
    return res.json();
  } catch (error) {
    console.log("Error fetching Techs data", error);
  }
};

const RecentPost = async ({ searchParams }) => {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "3";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const { allTechs } = await getAllTechs();

  const allData = allTechs.slice(start, end);

  const categoryList = [
    {
      name: "Apps review",
      path: "/categories?category=Apps review",
    },
    {
      name: "Freelancing",
      path: "/categories?category=Freelancing",
    },
    {
      name: "Google",
      path: "/categories?category=Google",
    },
    {
      name: "Trickbd Notice",
      path: "/categories?category=Trickbd Notice",
    },
    {
      name: "Youtube",
      path: "/categories?category=Youtube",
    },
    {
      name: "Education Guideline",
      path: "/categories?category=Education Guideline",
    },
  ];

  return (
    <div className="bg-slate-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Recent Post:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="col-span-1 md:col-span-4 flex flex-col gap-2">
          {allData.map((tech) => (
            <AllTechPost tech={tech} key={tech.id} />
          ))}
          <PaginationControls
            hasNextPage={end < allTechs.length}
            hasPrevPage={start > 0}
          />
        </div>
        <div className="col-span-1 border rounded-md bg-white">
          <h1 className="text-xl font-bold p-2 border-b">Category:</h1>
          {categoryList.map((category) => (
            <p key={category.name} className="border-b p-2">
              <Link href={category.path}>{category.name}</Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
