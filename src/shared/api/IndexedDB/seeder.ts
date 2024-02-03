import dbPromise from '.'
import initialData from './FortuneItems/initialData'

const seedDatabase = async () => {
    const db: any = await dbPromise

    const transaction = db.transaction('fortuneItems', 'readwrite')
    const store = transaction.objectStore('fortuneItems')

    initialData.forEach((item: any) => {
        store.put(item)
    })

    return new Promise((resolve: any, reject: any) => {
        transaction.oncomplete = () => resolve()
        transaction.onerror = () => reject(transaction.error)
    })
}

function seedFortuneItems() {
    seedDatabase()
        .then(() => {
            console.log('Database seeded successfully')
        })
        .catch(error => {
            console.error('Error seeding the database:', error)
        })
}

export default seedFortuneItems
