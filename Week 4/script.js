let getDataDigimon = async () => {
    let URL = "https://digimon-api.vercel.app/api/digimon"
    let response = await fetch(URL)
    let digimons = await response.json()
    console.log(digimons)
}
getDataDigimon()