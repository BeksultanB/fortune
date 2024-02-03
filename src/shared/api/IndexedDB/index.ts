import { openDB } from 'idb'

const databaseName = 'Fortune'
const storeName = 'fortuneItems'
const version = 1

const dbPromise = openDB(databaseName, version, {
    upgrade(db) {
        if (!db.objectStoreNames.contains(storeName)) {
            const store = db.createObjectStore(storeName, {
                keyPath: 'id',
                autoIncrement: true,
            })
            store.createIndex('value', 'value', { unique: true })
        }
    },
})

export default dbPromise
