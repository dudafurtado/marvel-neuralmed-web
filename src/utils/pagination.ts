export default function renderPageNumbers(
  currentPage: number,
  howManyCharacters: number
): (number | string)[] {
  const totalOfPages: number = Math.round(howManyCharacters / 10);
  const pageNumbers: (number | string)[] = [];
  const maxPagesToShow: number = 5;

  if (totalOfPages <= maxPagesToShow) {
    for (let i = 1; i <= totalOfPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    const startPage: number = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage: number = Math.min(totalOfPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (startPage > 1) {
      pageNumbers.unshift('...');
      pageNumbers.unshift(1);
    }

    if (endPage < totalOfPages) {
      pageNumbers.push('...');
      pageNumbers.push(totalOfPages);
    }
  }

  return pageNumbers;
}
