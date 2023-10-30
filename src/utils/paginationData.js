export const getPaginationData = (currentPage, cardsPerPage, data) => {
  let lastCardIndex
  let firstCardIndex

  if (data.length === 0) {
    firstCardIndex = 0
    lastCardIndex = 0
  } else if (currentPage * cardsPerPage > data.length) {
    const difference = currentPage * cardsPerPage - data.length
    lastCardIndex = data.length
    firstCardIndex = (currentPage - 1) * cardsPerPage
  } else {
    lastCardIndex = currentPage * cardsPerPage
    firstCardIndex = lastCardIndex - cardsPerPage
  }

  const totalPagesAmount = Math.ceil(data.length / cardsPerPage);
  const allPagesNumbers = [...Array(totalPagesAmount + 1).keys()].slice(1);

  const currentPageData = data.slice(firstCardIndex, lastCardIndex);

  return {
    lastCardIndex,
    firstCardIndex,
    allPagesNumbers,
    currentPageData
  }
}

export const changePage = (value, currentPage, setCurrentPage) => {
  if (value === "next") {setCurrentPage(currentPage + 1)}
  else if (value === "prev") {setCurrentPage(currentPage - 1)}
  else setCurrentPage(value)
}