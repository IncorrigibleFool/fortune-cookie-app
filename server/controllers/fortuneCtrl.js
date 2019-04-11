let id = 1
let fortunes = []

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