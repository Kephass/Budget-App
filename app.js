//BUDGET CONTROLLER
//using of closure and IIFE to keep the controller private 
var budgetController = (function (params) {

    
})();



//UI CONTROLLER
var UIController = (function () {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return function () {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp.
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        };
    };

    //making this object public so that other methods can access it.
    getDOMstrings: function() {
        return DOMstrings;
    }

})();



//GLOBAL APP CONTROLLER
//how to connect the two controllers.
var controller = (function (budgetCtrl, UICtrl) {

    //initializing the object...
    var DOM = getDOMstrings.DOMstrings();

    var ctrlAddItem = function () {
        
        //1. get field input data
        var input = UICtrl.getInput();
        console.log(input);


        //2. add the item to the budget controller

        //3. add the item to the UI

        //4. Calculate the budget

        //5. Display budget on the UI

    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
        
    })
    
})(budgetController, UIController);