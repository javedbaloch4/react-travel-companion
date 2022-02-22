import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': '849dd52540msh29acbae3e4edae1p169d4cjsnce9a7ccc8d97' // Can be changed later on with ENV
          }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}