module.exports = {
    getHouses: async (req, res) => {
        const houses = await req.app.get('db').get_all_houses()
        console.log(houses)
        res.status(200).send(houses)
    },
    addHouse: async (req, res) => {
        const {property_name, address, city, state, zip, img_url, mortgage, rent} = req.body;
        const houses = await req.app.get('db').add_house([property_name, address, city, state, +zip, img_url, +mortgage, +rent])
        console.log(houses)
        res.send(200).send(houses)
    },
    deleteHouse: async (req, res) => {
        const {id} = req.params
        const houses = await req.app.get('db').delete_house(id)
        console.log(houses)
        res.sendStatus(200)
    }
}