import Image from "next/image";
import { FaComment, FaEye, FaThumbsUp } from "react-icons/fa";

const FeaturedBlogs = ({ tech }) => {
  const {
    name,
    _id,
    description,
    category,
    photoTitle,
    author,
    likes,
    views,
    comment,
  } = tech;
  return (
    <div className="border border-gray-400 rounded-md w-[390px shadow-lg relative">
      <Image
        src={photoTitle}
        width={390}
        height={0}
        loading={"lazy"}
        alt={name}
        className="rounded-t-md w-[390px] h-[250px]"
      />
      <div className="relative w-36 mx-auto">
        <p className="bg-blue-400 px-3 rounded-full text-white text-center font-medium absolute -top-3 ">
          {category}
        </p>
      </div>
      <h3 className="text-lg font-bold px-2 mb-2 mt-5">{name}</h3>
      <p className="px-2 mb-16">{description.slice(0, 100)}...</p>
      <div className="flex justify-between items-center mt-8 px-2 bg-gray-400 py-3 rounded-b-md absolute left-0 right-0 bottom-0">
        <p>{author}</p>
        <p className="flex items-center gap-1">
          <FaComment /> {comment}
        </p>
        <p className="flex items-center gap-1">
          <FaEye />
          {views}
        </p>
        <p className="flex items-center gap-1">
          <FaThumbsUp /> {likes}
        </p>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
