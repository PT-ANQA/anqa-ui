var nmasterRoutes = require("./nmaster");
var tokoRoutes = require("./toko");
var gudangPusatRoutes = require("./gudang-pusat");
var laporanRoutes = require("./laporan");
var publicRoutes = require("./public");
var authRoutes = require("./auth");
var finishingRoutes = require("./finishing");
var generalInventoryRoutes = require("./general-inventory");
var anqaRoutes = require("./anqa-report");
var merchandiserRoutes=require("./merchandiser");

export default [].concat(
  nmasterRoutes,
  publicRoutes,
  gudangPusatRoutes,
  tokoRoutes,
  finishingRoutes,
  laporanRoutes,
  authRoutes,
  generalInventoryRoutes,
  anqaRoutes,
  merchandiserRoutes
);

// export default [].concat(nmasterRoutes, publicRoutes, gudangPusatRoutes, laporanRoutes, reportRoutes, designerRoutes, merchandiserRoutes, finishingRoutes, generalInventoryRoutes, authRoutes, purchaseRoutes, npurchaseRoutes, nmasterplan, expeditionRoutes, accountingRoutes, customersRoutes, generalSettingRoutes, bateeqshopReportRoutes, promotionRoutes, nmerchandiserRoutes, nsalesRoutes, gpurchasingRoutes, garmentproductionRoutes);

// export default [].concat(nmasterRoutes, gudangPusatRoutes, finishingRoutes, publicRoutes );
// export default [].concat(nmasterRoutes, publicRoutes,gudangPusatRoutes, finishingRoutes, purchaseRoutes, npurchaseRoutes, nmasterplan, expeditionRoutes, accountingRoutes, customersRoutes, generalSettingRoutes, bateeqshopReportRoutes, promotionRoutes, nmerchandiserRoutes, nsalesRoutes, gpurchasingRoutes, garmentproductionRoutes);
