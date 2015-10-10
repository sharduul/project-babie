var Label = require('../models').labelModel;

module.exports = function(app) {


    // API to get all the labels
    app.get('/api/label', function (req, res) {

        var filterObject = {};

        // parse the filter operands only if the filter is provided in the request URL
        if(req.query.filter){
            // get the lhs and the rhs of the filter
            var operands = getOperands(req.query.filter);

            // '^' takes care of "starts with" filter
            // if you don't provide '^'... then it will run "contains" filter
            filterObject.labelInfo = new RegExp('^' + operands.rhs, "i");
        }

        Label.find(filterObject, {}, function (err, labels) {
            if (err) {
                return res.send(err);
            }
            res.send(labels);

            console.log("success /labels");
        });
    });


// ********************* private functions **********************************************


    // utility function to get the operands of the filter provided in the request
    function getOperands(expression) {

        var operands = expression.split('startswith').map(function (item) {
            return item.trim()
        });

        operands.lhs = operands[0];
        operands.rhs = operands[1];

        return operands;
    }

};
