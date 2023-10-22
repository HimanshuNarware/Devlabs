export const getPaginationData = (currentPage, cardsPerPage, data) => {
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;

  const totalPagesAmount = Math.ceil(data.length / cardsPerPage);
  const allPagesNumbers = [...Array(totalPagesAmount + 1).keys()].slice(1);

  return {
    lastCardIndex,
    firstCardIndex,
    allPagesNumbers
  }
}

export const changePage = (value, currentPage, setCurrentPage) => {
  if (value === "next") {setCurrentPage(currentPage + 1)}
  else if (value === "prev") {setCurrentPage(currentPage - 1)}
  else setCurrentPage(value)
}