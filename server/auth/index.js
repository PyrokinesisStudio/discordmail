const express = require('express');
const auth = require('./auth');

const router = express.Router();

router.use('/callback', auth.authenticate('discord'), (req, res) => {
	res.redirect(req.session.redirect || '/');
})
	.get('/', auth.authenticate('discord'))
	.get('/info', (req, res) => {
		if (req.user && req.user.id) {
			res.json(req.user);
		} else {
			res.status(404).json(null);
		}
	})
	.use('/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

module.exports = router;
