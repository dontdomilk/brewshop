

class SingleBeerMapper {
    mapToVM = (payload) => ({
        id: payload.id,
        basic: {
            name: payload.name,
            firstBrewed: payload.first_brewed,
            foodPairing: payload.food_pairing.join(', '),
            description: payload.description,
            imageUrl: payload.image_url,
            tagline: payload.tagline
        },
        recipe: {
            abv: payload.abv,
            ibu: payload.ibu,
            targetFg: payload.target_fg,
            targetOg: payload.target_og,
            ebc: payload.ebc,
            ph: payload.ph,
            volume: {
                value: payload.volume.value,
                unit: payload.volume.unit
            },
            boilVolume: {
                value: payload.boil_volume.value,
                unit: payload.boil_volume.unit
            },

        }
    })
}

export default new SingleBeerMapper();