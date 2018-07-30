jQuery.sap.declare("User.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
jQuery.sap.require("sap.ui.generic.app.AppComponent");

sap.ui.generic.app.AppComponent.extend("User.Component", {
	metadata: {
		"manifest": "json"
	},
	constructor: function() {
		sap.ui.generic.app.AppComponent.prototype.constructor.apply(this, arguments);
		this.getModel().setTokenHandlingEnabled(false);
	}
});