sap.ui.define(
	[
	], function () {
		"use strict";

		/**
		 * Label renderer.
		 *
		 * @author Robin Panneels
		 * @namespace
		*/	
		var ProductRatingRenderer = {};
	
		/**
		 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
		 *
		 * @param {sap.ui.core.RenderManager} rm The RenderManager that can be used for writing to the renderer output buffer
		 * @param {sap.ui.core.Control} oLabel An object representation of the control that should be rendered
		 */	
		ProductRatingRenderer.render = function(oRm, oControl) {
			oRM.write("<div");
			oRM.writeControlData(oControl);
			oRM.addClass("myAppDemoWTProductRating");
			oRM.writeClasses();
			oRM.write(">");
			oRM.renderControl(oControl.getAggregation("_rating"));
			oRM.renderControl(oControl.getAggregation("_label"));
			oRM.renderControl(oControl.getAggregation("_button"));
			oRM.write("</div>");
		};
		
		return ProductRatingRenderer;
	}, 
	/* bExport= */ true
);