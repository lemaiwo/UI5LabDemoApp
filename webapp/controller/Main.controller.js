sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"ui5lab/striptoastr/StripToastr",
	"ui5lab/wl/img/ImageViewer",
	'openui5/tour/Tour',
	'openui5/tour/TourStep',
	"sap/m/Text"
], function(Controller, JSONModel, StripToastr, ImageViewer, Tour, TourStep, Text) {
	"use strict";

	return Controller.extend("be.wl.ui5lab.UI5LabDemoApp.controller.Main", {
		aSnapshots: [],
		onInit: function() {
			this.getView().setModel(new JSONModel({
				images: []
			}));

			this.tourSteps = [
				new TourStep({
					content: new Text({
						text: 'Click on the screen to take a picture'
					}),
					target: this.getView().byId('idCamera'),
					title: 'Step 1: Camera'
				}),
				new TourStep({
					content: new Text({
						text: 'Overview of taken pictures'
					}),
					target: this.getView().byId('idGrid'),
					title: 'Step 2: Galery'
				}),
			];

			this._tour = new Tour({
				steps: this.tourSteps
			});
		},
		onSnapshot: function(oEvent) {
			StripToastr.notify({
				text: "Picture taken"
			});
			var aImages = this.getView().getModel().getProperty("/images");
			aImages.push({
				src: oEvent.getParameter("image")
			});
			this.getView().getModel().setProperty("/images", aImages);
		},
		showImage: function(oEvent) {
			var oImageViewer = new ImageViewer({
				src: oEvent.getSource().getBindingContext().getObject().src
			});
			oImageViewer.open();
		},
    onStartTour: function() {
      this._tour.start();
    }
	});
});