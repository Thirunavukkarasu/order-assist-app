const listData = (req, res) => {
  return res.json({
    message: "Listing Package Data",
  });
};

module.exports = {
  listData,
};
