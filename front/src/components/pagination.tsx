"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export const Pagination = ({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) => {
  return (
    <div className="absolute bottom-16 right-16 flex justify-center items-center gap-4">
      <Link
        href={`?page=${currentPage - 1}`}
        aria-disabled={currentPage === 1}
        className={clsx({
          "opacity-50 cursor-not-allowed": currentPage === 1,
        })}
        onClick={(e) => {
          if (currentPage === 1) {
            e.preventDefault();
          }
        }}
      >
        <Image src="/nav-arrow.svg" alt="" height={22} width={22} />
      </Link>
      <span className="text-white">
        {currentPage} de {totalPages}
      </span>
      <Link
        href={`?page=${currentPage + 1}`}
        className={clsx({
          "opacity-50 cursor-not-allowed":
            currentPage === totalPages || currentPage > totalPages,
        })}
        aria-disabled={currentPage === totalPages || currentPage > totalPages}
        onClick={(e) => {
          if (currentPage === totalPages || currentPage > totalPages) {
            e.preventDefault();
          }
        }}
      >
        <Image
          src="/nav-arrow.svg"
          alt=""
          height={22}
          width={22}
          className="rotate-180"
        />
      </Link>
    </div>
  );
};
