import dbPromise from '..'
import seedFortuneItems from '../seeder'

const getList = async () => {
    const db = await dbPromise
    const tx = db.transaction('fortuneItems', 'readonly')
    const store = tx.objectStore('fortuneItems')
    const allItems = await store.getAll()
    if (!allItems.length) {
        seedFortuneItems()
    }
    // console.log(allItems)
    return allItems
}

const getSingle = async (id: any) => {
    const db = await dbPromise
    const tx = db.transaction('fortuneItems', 'readonly')
    const store = tx.objectStore('fortuneItems')
    const res = await store.get(id)
    // console.log(res)
    return res
}
const createSingle = async (data: any) => {
    const db = await dbPromise
    const tx = db.transaction('fortuneItems', 'readwrite')
    const store = tx.objectStore('fortuneItems')
    const res = await store.put(data)
    return res
    // console.log(res)
}
const updateSingle = async (data: any) => {
    const db = await dbPromise
    const tx = db.transaction('fortuneItems', 'readwrite')
    const store = tx.objectStore('fortuneItems')
    const res = await store.put(data)
    return res
    // console.log(res)
}
const deleteSingle = async (id: any) => {
    const db = await dbPromise
    const tx = db.transaction('fortuneItems', 'readwrite')
    const store = tx.objectStore('fortuneItems')
    const res = await store.delete(id)
    return res
    // console.log(res)
}

export { getList, getSingle, createSingle, updateSingle, deleteSingle }
