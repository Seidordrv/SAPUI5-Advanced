sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";



        var Main = Controller.extend("logaligroup.employees.controller.MainView", {});

            Main.prototype.onValidate = function () {
                var inputEmployee = this.byId("inputEmployee");
                var valueEmployee = inputEmployee.getValue();

                if (valueEmployee.length === 6) {
                    //inputEmployee.setDescription("OK");
                    this.getView().byId("labelCountry").setVisible(true);
                    this.getView().byId("slCountry").setVisible(true);
                } else {
                    //inputEmployee.setDescription("Not OK");
                    this.getView().byId("labelCountry").setVisible(false);
                    this.getView().byId("slCountry").setVisible(false);
                };
            };

        return Main;
    });
