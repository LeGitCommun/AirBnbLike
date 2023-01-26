const Owner = require('../models/owners');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config()

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const owner = new Owner({
          email: req.body.email,
          password: hash
        });
        owner.save()
          .then(() => res.status(201).json({ message: 'Propriétaire créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

  exports.login = (req, res, next) => {
    Owner.findOne({ email: req.body.email })
        .then(owner => {
            if (!owner) {
                return res.status(401).json({ error: 'Propréitaire non trouvé !' });
            }
            bcrypt.compare(req.body.password, owner.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        uownerId: owner._id,
                        token: jwt.sign(
                            { ownerId: owner._id },
                            process.env.SECRET,
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
 };