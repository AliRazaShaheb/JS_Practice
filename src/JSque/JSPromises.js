const promise1 = (num) => {
  return new Promise((res, rej) => {
    if (num <= 5) rej("failed");
    res("success");
  });
};

const AllPromises = [promise1];

export default AllPromises;
