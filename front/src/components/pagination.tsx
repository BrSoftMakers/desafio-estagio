"use client";

import { getPagesNumber } from "@/lib/data";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export const Pagination = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page")
    ? parseInt(searchParams.get("page")!)
    : 1;
  const currentSearch = searchParams.get("search") ?? "";

  const getPagesFunction = getPagesNumber.bind(null, currentSearch);
  const { isPending, error, data } = useQuery({
    queryKey: ["pages", currentPage, currentSearch],
    queryFn: getPagesFunction,
  });

  if (isPending) return null;
  if (error) return <p>Erro: {error.message}/</p>;

  const totalPages = data;

  if (currentPage > totalPages && currentPage !== 1)
    return router.push("?page=1");

  return (
    <div className="absolute bottom-16 right-16 flex justify-center items-center gap-4">
      <Link
        href={`?page=${currentPage - 1}&search=${currentSearch}`}
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
        href={`?page=${currentPage + 1}&search=${currentSearch}`}
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
