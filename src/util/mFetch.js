let products = [
    {id: 1, brand: "Supreme", model: "Max", liquidCapacity: 7, batery: 950, puffs: 2000, charger: "", productImage: ""},
    {id: 2, brand: "Supreme", model: "Fumar", liquidCapacity: 14, batery: 650, puffs: 5400, charger: "USB C", productImage: "" },
    {id: 3, brand: "Supreme", model: "Bar", liquidCapacity: 14, batery: 650, puffs: 6000, charger: "USB C", productImage: ""},
    {id: 4, brand: "Supreme", model: "Epic+", liquidCapacity: 16, batery: 650, puffs: 7000, charger: "USB C", productImage: ""},
    {id: 5, brand: "Supreme", model: "Lux", liquidCapacity: 18, batery: 650, puffs: 7500, charger: "USB C", productImage: "" },
]


export const mFetch = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(products)
        }, 1000)
    })
}