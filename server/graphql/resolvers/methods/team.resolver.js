const Team = require("../../../models/Team");

const teams = (props, args) => {
    args.res.cookie("john", "doe");
    return Team.find((err, res) => {
        if (err) throw err;
        return [res];
    });
};

const createTeam = (props, args) => {
    // console.log(args);
    console.log(args.req.cookies);
    const team = new Team({
        name: props.team.name,
        description: props.team.description,
        owner: props.team.owner,
    });
    return team.save();
};

module.exports = {
    teams,
    createTeam,
};
