const { SalesOrder } = require("../../../models");

const listData = async (req, res) => {
  const { page, limit, sort } = req.body;
  // Or with extra options
  const options = {
    //select: 'title date author',
    sort: { date: -1 },
    lean: true,
    offset: page * limit,
    limit: limit || 10,
    sort: sort ||[["created_at", "DESC"]],
  };
  try {
    console.log(req.auth, req.user);
    const { docs, pages, total } = await SalesOrder.paginate({}, options);

    return res.json({
      message: "Listing Sales Order Data",
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

const createSalesOrder = async (req, res) => {
  const { customerId, status, amount, salesEmail, createdBy, updatedBy } =
    req.body;

  try {
    return res.json({
      message: "Sales Order Created!",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Sales Order Creation Failed!",
    });
  }
};

module.exports = {
  listData,
  createSalesOrder,
};
