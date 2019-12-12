

class SingleBeerMapper {
    mapToVM = (payload) => ({
        id: payload.id,
        name: payload.name,
        firstBrewed: payload.first_brewed,
        foodPairing: payload.food_pairing.join(', '),
        description: payload.description,
        imageUrl: payload.image_url
    })
}

export default new SingleBeerMapper();