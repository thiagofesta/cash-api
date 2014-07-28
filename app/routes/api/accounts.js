var express = require('express');
var router = express.Router(); 

var Account     = require('../../models/account');

router.route('/')

    // create a account (accessed at POST http://localhost:8080/api/account)
    .post(function(req, res) {
        
        var account = new Account();      // create a new instance of the Account model
        account.name = req.body.name;
        account.description = req.body.description;

        // save the account and check for errors
        account.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Account created!' });
        });
        
    })

    // get all the accounts (accessed at GET http://localhost:8080/api/accounts)
    .get(function(req, res) {
        Account.find(function(err, accounts) {
            if (err)
                res.send(err);

            res.json(accounts);
        });
    });

// on routes that end in /accounts/:id
// ----------------------------------------------------
router.route('/:id')

    // get the account with that id (accessed at GET http://localhost:8080/api/accounts/:id)
    .get(function(req, res) {
        Account.findById(req.params.id, function(err, account) {
            if (err)
                res.send(err);
            res.json(account);
        });
    })

    // update the account with this id (accessed at PUT http://localhost:8080/api/accounts/:id)
    .put(function(req, res) {

        // use our account model to find the account we want
        Account.findById(req.params.id, function(err, account) {

            if (err)
                res.send(err);

            account.name = req.body.name;  // update the accounts info
            account.description = req.body.description;  // update the accounts info

            // save the account
            account.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Account updated!' });
            });

        });
    })

    // delete the account with this id (accessed at DELETE http://localhost:8080/api/accounts/:id)
    .delete(function(req, res) {
        Account.remove({
            _id: req.params.id
        }, function(err, account) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router;
