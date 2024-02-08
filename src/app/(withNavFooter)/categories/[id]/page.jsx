// import DisqusComments from "@/components/DisqusComment";

const getSingleTech = async ({ id }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/alltech/${id}`, {
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

const SingleCategoryPost = async ({ params }) => {
  const { tech } = await getSingleTech(params);
  const { name, category, description, likes } = tech;

  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <h1 className="font-medium">{name}</h1>
      <p className="mt-1">Category: {category}</p>
      <p className="my-1">{description}</p>
      <p>Likes: {likes}</p>
      {/* <DisqusComments tech={tech} /> */}
    </div>
  );
};

export default SingleCategoryPost;
