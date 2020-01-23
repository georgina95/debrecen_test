sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("debrecen.git_test.controller.View1", {
		onInit: function () {
			sap.m.MessageToast.show("Hello World");
		}
	});
});