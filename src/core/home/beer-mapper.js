

class SingleBeerMapper {
    mapToVM = (payload) => ({
        name: payload.name,
        firstBrewed: payload.first_brewed,
        foodPairing: payload.food_pairing.join(', '),
        description: payload.description,
        imageURL: payload.image_url
    })
}

export default new SingleBeerMapper();