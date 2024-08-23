module.exports = async(app, db) => {
    app.get('/checkout', async(req, res) => {
        // Display the search page for the user
        return res.send('Show the search with the user!')
    })

    app.get('/checkout/:kid', async(req, res) => {
        // Display the page where they can either check themselves in or out depending if they are checked in or out currently.
        
    })

    app.post('/checkout/search', async(req, res) => {
        // Search the kid in the database to allow them to checkin and check themselves out.

    })

    app.post('/checkin/:kid', async(req, res) => {
        // Checkin the user to the center.

    })

    app.post('/checkout/:kid', async(req, res) => {
        // Checkout the kid with the reasoning and if they will be coming back or not.

    })
}