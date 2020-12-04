const router = require("express").Router();
const Group = require("../../schemas/Group");
const checkAuth = require("../../utils/checkAuth");

router.post("/create", async(req,res) => {
    console.log(req.headers.cookie)
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

router.get("/all", (req,res) => {
    Group.find((err,data) => {
        if(err) throw err;
        console.log(data);
        res.status(200).json(data);
    })
})

module.exports = router;