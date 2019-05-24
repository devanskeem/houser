module.exports = {
    getHouses: async (req, res) => {
        const houses = await req.app.get('db').get_all_houses()
        console.log(houses)
        res.status(200).send(houses)
    }
}