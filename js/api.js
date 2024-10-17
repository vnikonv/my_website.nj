const petro = document.getElementById("Petro")
const tucson = document.getElementById("Tucson")
const tokyo = document.getElementById("Tokyo")
const akranes = document.getElementById("Akranes")
const green_lake = document.getElementById("Green Lake")

async function Api() {
    const respons_petro = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=69.11548809207305&current=temperature_2m&hourly=temperature_2m")
    const respons_tucson = await fetch("https://api.open-meteo.com/v1/forecast?latitude=32.388700047778265&longitude=-111.09217947996893&current=temperature_2m&hourly=temperature_2m")
    const respons_tokyo = await fetch("https://api.open-meteo.com/v1/forecast?latitude=35.45241385930772&longitude=139.69801824402919&current=temperature_2m&hourly=temperature_2m")
    const respons_akranes = await fetch("https://api.open-meteo.com/v1/forecast?latitude=64.31767522082099&longitude=-22.09804555720518&current=temperature_2m&hourly=temperature_2m")
    const respons_green_lake = await fetch("https://api.open-meteo.com/v1/forecast?latitude=54.28031573643925&longitude=-107.79347093195491&current=temperature_2m&hourly=temperature_2m")
    const data_petro = await respons_petro.json()
    const data_tucson = await respons_tucson.json()
    const data_tokyo = await respons_tokyo.json()
    const data_akranes = await respons_akranes.json()
    const data_green_lake = await respons_green_lake.json()
    return [data_petro, data_tucson, data_tokyo, data_akranes, data_green_lake]
}

async function output() {
    try {
        let out = await Api()
        console.log(out)
        petro.textContent = `Air temperature: ${out[0].current.temperature_2m} \u00B0C`
        tucson.textContent = `Air temperature: ${out[1].current.temperature_2m} \u00B0C`
        tokyo.textContent = `Air temperature: ${out[2].current.temperature_2m} \u00B0C`
        akranes.textContent = `Air temperature: ${out[3].current.temperature_2m} \u00B0C`
        green_lake.textContent = `Air temperature: ${out[4].current.temperature_2m} \u00B0C`
    }
    catch(error) {
        console.log(error)
    }
    finally {
        setTimeout(output, 10000)
    }
}

output();