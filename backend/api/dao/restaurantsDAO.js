let restaurants; // reference to DB

export default class RestaurantsDAO {

    // initial connection to DB when server starts
    static async injectDB(conn) { 
        if (restaurants) {
            return
        }
        try {
            restaurants = await conn.db(process.env.RESTREVIEWS_NS).collection("restaurants");
        } catch (e) {
            console.error(
                'Unable to establish a collection handle in restaurantsDAO: ', e
            );
        }
    }


}