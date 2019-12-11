
import SingleBeerMapper from './beer-mapper';

class BeerMapper {
    mapToVM = (payload) => ({
        beers: payload.map(item => SingleBeerMapper.mapToVM(item))
    })
}

export default new BeerMapper()