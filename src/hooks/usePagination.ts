import { useState } from "react";

export default function usePagination(
  totalItems: number,
  itemsPerPage: number = 10,
  initialPage: number = 1
) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const setPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const canNextPage = currentPage < totalPages;
  const canPrevPage = currentPage > 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1);

  const itemsOnCurrentPage =
    totalItems === 0 ? 0 : endIndex - startIndex + 1;

  return {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    setPage,
    canNextPage,
    canPrevPage,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
  };
}