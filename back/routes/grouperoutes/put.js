var groupecontroller = require("../../controllers/groupe.controllers");
const authmidllwares = require("../../midllwares/auth/authmidllwares");
const {upload} = require ('../../midllwares/filehelper/filehelper')

const initializePutRoutes = (app) => {
  app.put("/groupe/:groupeId", [authmidllwares, groupecontroller.update]);
  app.put("/putsub/:groupeId",[authmidllwares,groupecontroller.putsub])
  app.put("/addtogroupe/:groupeId/:subId",[authmidllwares,groupecontroller.addtogroupe])
  app.put("/reject/:groupeId/:subId",[authmidllwares,groupecontroller.reject]);
  app.put("/groupeavatar/:id", [upload,groupecontroller.uploadgroupe]);

};

module.exports = initializePutRoutes;
