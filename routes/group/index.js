const router = require("express").Router();
const Group = require("../../schemas/Group");
const checkAuth = require("../../utils/checkAuth");

router.post("/create", async(req,res) => {

    let {name, tags, category,requirements,contact} = req.body;

    const alreadyExists = await Group.findOne({name});

    if (alreadyExists) {
        res.status(400).json({ err: "Group name already exists" });
        return;
    }

    const group = new Group({
        name,
        // owner,
        tags,
        category,
        requirements,
        contact
    })

    group.save((err) => {
        if (err) throw err;
        res.status(200).send("Group Created");
    });

});

module.exports = router;