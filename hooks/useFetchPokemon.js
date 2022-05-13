import { urls } from "../constants/constants";

export const useFetchPokemon = async (dexNum) => {
    const response = await fetch(`${urls.pokemonPath}/${dexNum}`)
    //const data = await response.json()
    const {name, sprites : {front_default : img}, types} = await response.json()
    const type_name = types.map((v) => {
        return v.type.name
    })
    console.log(type_name)
    return [
        name,
        img,
        type_name
    ]
    // return data
}