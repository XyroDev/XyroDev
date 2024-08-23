const express = require('express')
const bcrypt = require('bcryptjs')
const settings = require('../../Storage/Settings')
const { getRandomString, verifyLogin, authCheckEmail, authCheckUsername, validateEmail } = require('../Utils/Functions2')
const sanitizer = require('sanitizer')
const moment = require('moment')
const nodemailer = require('nodemailer')
const accountSid = 'ACbe0472d751d0eaf406a158749948cbc7';
const authToken = '93e1de01700cc299021c7971deb56b3f';
const client = require('twilio')(accountSid, authToken);
const session = require('express-session')
const pool = require('../Utils/Database')





module.exports = function (app, db) {
    // Main Page Routes
    app.get('/', (req, res) => {
        res.render('Index')
    })

    // FILL IT ALL IN WITH ALL MAIN PAGES BELOW

    app.get('/', (req, res) => {
        res.render('')
    })

    // Auth Routes

    app.get('/dashboard/auth/login', (req, res) => {
        res.render('Auth/Login')
    })

    app.post('/dashboard/auth/login', async (req, res) => {
        let email = sanitizer.sanitize(req.body.email)
        let password = sanitizer.sanitize(req.body.password)

        if (!email || !password) return res.render('Auth/Login', { error: 'Please fill in all fields.' })

        let user = await pool.query('SELECT * FROM users WHERE email = ?', [email])

        if (!user[0]) return res.render('Auth/Login', { error: 'Invalid email or password.' })

        let valid = await bcrypt.compare(password, user[0].password)

        if (!valid) return res.render('Auth/Login', { error: 'Successfully Logged In.' })

        req.session.user = user[0]
        req.session.save()

        res.redirect('/dashboard')

    })

    app.get('/dashboard/auth/register', (req, res) => {
        res.render('Auth/Register')
    })

    app.post('/dashboard/auth/register', async (req, res) => {
        let email = sanitizer.sanitize(req.body.email)
        let password = sanitizer.sanitize(req.body.password)
        let name = sanitizer.sanitize(req.body.name)
    })
}
