let id = 1

let fortunes = [
    {
        id: id++,
        message:'"Temper is so good a thing that we should never lose it."'
    },
    {
        id: id++,
        message:`"If you lose your temper, don't look for it."`
    },
    {
        id: id++,
        message:'"Heavy givers are light complainers."'
    },
    {
        id: id++,
        message:'"Attack is the best form of defense"'
    },
    {
        id: id++,
        message:`"At a round table there's no dispute about the place."`
    },
]

module.exports = {
    get: (req, res) => res.send(fortunes),

    create: (req, res) => {
        let newFortune = req.body
        newFortune.id = id++
        fortunes.push(newFortune)
        res.send(newFortune)
    },

    update: (req, res) => {
        let {id} = req.params
        let changedFortune = req.body
        changedFortune.id = id
        let index = fortunes.findIndex(fortune => fortune.id == id)
        fortunes.splice(index, 1, changedFortune)
        res.send(fortunes)
    },

    delete: (req, res) => {
        let {id} = req.params
        let index = fortunes.findIndex(fortune => fortune.id == id)
        fortunes.splice(index, 1)
        res.send(fortunes)
    }
}