sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",

	"./BaseController"
], function(BaseController,Filter,Controller) {
	"use strict";

	return Controller.extend("Zsm10.controller.Main", {

onInit: function () {
	var filters = [];
	var oFilter = new Filter("ZZUSUARIO", sap.ui.model.FilterOperator.Contains, "ROGI");
				filters.push(oFilter);

    var list = this.getView().byId("table_imputacion");
    var binding = list.getBinding("items");
    binding.filter(filters);
	},


	click: function(event) {
		
		var item = event.getSource().getSelectedItem();
		var valor = item.getBindingContext().getProperty("RecordId");
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("Detalles");
	},

	onSelectChange: function(event){
	// 	var oFilter = null;
	// 	oFilter = new sap.ui.model.Filter([this._oGlobalFilter, this._oPriceFilter], true);
	// 	this.getView().byId("table_imputacion").getBinding("rows").filter(oFilter, "Application");
	// }
	    var filters = [];
    // var query = event.getParameter("query");
    // if (query && query.length > 0) {
    //     var nameFilter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, query);

    //     filters.push(nameFilter);
    // }

var oFilter = new Filter("ZZUSUARIO", sap.ui.model.FilterOperator.Contains, "ROGI");
				filters.push(oFilter);

    var list = this.getView().byId("table_imputacion");
    var binding = list.getBinding("items");
    binding.filter(filters);
	}
	
	});
});