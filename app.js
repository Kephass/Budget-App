//BUDGET CONTROLLER
//using of closure and IIFE to keep the controller private 
var budgetController = (function (params) {

    
})();



//UI CONTROLLER
var UIController = (function () {
    
    //Some code

})();



//GLOBAL APP CONTROLLER
//how to connect the two controllers.
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {
        
        //1. get field input data

        //2. add the item to the budget controller

        //3. add the item to the UI

        //4. Calculate the budget

        //5. Display budget on the UI

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
        
    })
    
})(budgetController, UIController);