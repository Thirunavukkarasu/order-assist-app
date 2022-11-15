const { Package } = require("../../../models");

const listData = async (req, res) => {
  const { page, limit, sort } = req.query;
  // Or with extra options
  const options = {
    //select: 'title date author',
    sort: { date: -1 },
    lean: true,
    offset: page * limit,
    limit: limit || 10,
    sort: [[sort || "created_at", "DESC"]],
  };
  try {
    const { docs, pages, total } = await Package.paginate({}, options);

    return res.json({
      message: "Listing Grid Data",
      docs,
      pages,
      total,
      page,
      limit,
      sort,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Listing fetch failed!",
      error,
    });
  }
};

module.exports = {
  listData,
};
