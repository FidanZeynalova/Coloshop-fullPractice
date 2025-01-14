const express = require("express")
const ColoshopController = require("../controller/coloshopController")

const routes = express.Router()

routes.get("/", ColoshopController.getAll)
routes.get("/:id", ColoshopController.getDataById)
routes.post("/", ColoshopController.postData)
routes.delete("/:id", ColoshopController.deleteData)
routes.put("/:id", ColoshopController.editData)

module.exports = routes