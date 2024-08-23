class Functions {
    constructor(db) {
        this.db = db
    }

    
}

module.exports = (db) => {
    return new Functions(db)
}