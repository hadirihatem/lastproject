var groupecontroller = require("../../controllers/groupe.controllers");
const authmidllwares = require("../../midllwares/auth/authmidllwares");

const initalizegrouperoute = (app) => {
  app.post("/groupe/create", [authmidllwares,groupecontroller.insert]);

};

module.exports = initalizegrouperoute;
