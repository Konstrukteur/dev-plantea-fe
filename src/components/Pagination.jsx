import "../stylesheets/Pagination.css";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const numberOfVisiblePages = 10;
  const center = numberOfVisiblePages / 2;
  const lowerBoundary = center + 1;
  const upperBoundary = totalPages - center;

  const createPages = () => {
    return Array.from({ length: numberOfVisiblePages }, (value, index) =>
      totalPages < numberOfVisiblePages || currentPage < center
        ? index
        : index - center + currentPage
    ).filter((value) => value < totalPages);
  };

  return (
    <div className='pagination-links'>
      {totalPages > numberOfVisiblePages && currentPage > center && (
        <div
          key={totalPages}
          className='page-link'
          onClick={() => {
            setCurrentPage(1);
          }}
        >
          1
        </div>
      )}
      {currentPage !== 1 && currentPage >= lowerBoundary && (
        <div
          key='prev'
          className='page-link'
          onClick={() => {
            setCurrentPage((curr) => curr - 1);
          }}
        >
          {"<"}
        </div>
      )}

      {createPages().map((page) => {
        return (
          <div
            key={page}
            className={`${
              page === currentPage - 1 ? "active-page-link" : "page-link"
            }`}
            id={page}
            value={page}
            onClick={() => {
              setCurrentPage(page + 1);
            }}
          >
            {page + 1}
          </div>
        );
      })}
      {totalPages !== currentPage && currentPage <= upperBoundary && (
        <div
          key='next'
          className='page-link'
          onClick={() => {
            setCurrentPage((curr) => curr + 1);
          }}
        >
          {">"}
        </div>
      )}
      {totalPages > numberOfVisiblePages && currentPage <= upperBoundary && (
        <>
          <div
            key={totalPages}
            className='page-link'
            onClick={() => {
              setCurrentPage(totalPages);
            }}
          >
            {totalPages}
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;
