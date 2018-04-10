sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"./BaseController"
], function(BaseController,Controller) {
	"use strict";

	return Controller.extend("Zsm10.controller.Main", {

	click: function(event) {
		var item = event.getSource().getSelectedItem();
		var valor = item.getBindingContext().getProperty("RecordId");
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("Detalles");
	}

	});
});