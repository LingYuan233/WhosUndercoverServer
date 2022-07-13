const router = require("express").Router()
router.get("/canEnter", (req, res) => {
    if (allConn.length == maxPlayer) {
        res.send("Failed")
        return
    }
    res.send("Successful");
})
module.exports = router