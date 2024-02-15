"use client";

import { useRouter, useSearchParams } from "next/navigation";

const PaginationControls = ({ hasNextPage, hasPrevPage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "3";
  return (
    <div className="mt-2 flex items-center gap-2">
      <button
        className={!hasPrevPage ? "bg-blue-300 text-white p-1" : "bg-blue-500 text-white p-1"}
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`);
        }}
      >
        prev page
      </button>

      <div>
        {page} / {Math.ceil(10 / Number(per_page))}
      </div>

      <button
        className={!hasNextPage ? "bg-blue-300 text-white p-1" : "bg-blue-500 text-white p-1"}
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
      >
        next page
      </button>
    </div>
  );
};

export default PaginationControls;
