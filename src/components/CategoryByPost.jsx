import Image from "next/image";
import Link from "next/link";
import { FaComment, FaEye, FaThumbsUp } from "react-icons/fa";

const CategoryByPost = ({ tech }, searchParams) => {
  const {
    name,
    _id,
    category,
    photoTitle,
    description,
    likes,
    comment,
    views,
    author,
  } = tech;
  return (
    <Link
      href={`/categories/${_id}?category=${category}`}
      className="border border-gray-300 p-4 rounded-md bg-white"
    >
      <div className="flex gap-3 h-[170px] overflow-hidden">
        <div className="md:w-[400px]">
          <Image
            className="overflow-hidden"
            src={photoTitle}
            width={250}
            height={150}
            alt={name}
          />
        </div>
        <div>
          <h1 className="text-lg font-bold">{name}</h1>
          <p className="my-1">{description.slice(0, 100)}...</p>
          <div className="flex justify-between items-center mt-8">
            <p className="bg-blue-400 px-3 rounded-full text-white font-medium">
              {category}
            </p>
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
      </div>
    </Link>
  );
};

export default CategoryByPost;
