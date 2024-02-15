import Link from "next/link";

const CategoryLayout = async ({ children }) => {
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
    <div className="bg-slate-100 px-4 pt-20 pb-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="col-span-1 md:col-span-4">{children}</div>
        <div className="col-span-1 border rounded-md bg-white mt-16">
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

export default CategoryLayout;
