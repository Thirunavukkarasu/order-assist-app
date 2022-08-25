const listData = (req, res) => {
  return res.json({
    message: "Listing Shipment Data",
  });
};

module.exports = {
  listData,
};
