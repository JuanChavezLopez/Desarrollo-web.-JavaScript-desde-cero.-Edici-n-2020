const indexedDB = window.indexedDB

if (indexedDB) {
    let db
    const request = indexedDB.open('tasksList', 1)

    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
    }

    // PREGUNTAMOS SI LA BASE DE DATOS EXISTE
    request.onupgradeneeded = () => {
        db = request.result
        console.log('Create', db)
        const objectStore = db.createObjectStore('tasks')
    }

    // ESCUCHA LOS EVENTOS DE EXITO Y ERROR
    request.onerror = (error) => {
        console.log('Error', error)
    }
}