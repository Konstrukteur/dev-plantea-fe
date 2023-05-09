// mocking the fetch is used for pure frontend test cases only.
// i.e.: the data that is expected from the backend is mocked and provided by frontend

const fetchData = jest.fn(() => {
  return Promise.resolve();
});

module.exports = { fetchData };
