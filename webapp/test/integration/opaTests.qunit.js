/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"debrecen/git_test/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});