sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"./BaseController"
], function(BaseController, Filter, Controller) {
	"use strict";

	return Controller.extend("Zsm10.controller.Main", {

		onInit: function() {

		},

		click: function(event) {

			var item = event.getSource().getSelectedItem();
			var valor = item.getBindingContext().getProperty("RecordId");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Detalles",{algo: valor});
		},

		onSelectChange: function(event) {
	/*		var filters = [];
			var oFilter = new Filter("Zzusuario", sap.ui.model.FilterOperator.Contains, event.getSource().getValue());
			filters.push(oFilter);

			var list = this.getView().byId("table_imputacion");
			var binding = list.getBinding("items");
			binding.filter(filters);*/

		},
		
		onSearch: function(event) {
			var filters = [];
			var input = this.getView().byId("i1");
			if ( input.getValue() ){
				var oFilter = new Filter("ZzobjectId", sap.ui.model.FilterOperator.Contains, input.getValue());
				filters.push(oFilter);
			}
			input = this.getView().byId("i2");
			if ( input.getValue() ){
				oFilter = new Filter("ZzproySra", sap.ui.model.FilterOperator.Contains, input.getValue());
				filters.push(oFilter);
			}
			input = this.getView().byId("i3");
			if ( input.getValue() ){
				oFilter = new Filter("Zzusuario", sap.ui.model.FilterOperator.Contains, input.getValue());
				filters.push(oFilter);
			}
			
			var list = this.getView().byId("table_imputacion");
			var binding = list.getBinding("items");
			binding.filter(filters);
		}
	});
});
