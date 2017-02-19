/**
 * Initialization Code and shared classes of library sap.ui.suite.
 */
sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/library', 
    'sap/m/library'], // library dependency
    function(jQuery) {

    "use strict";

	// Include custom css
	sap.ui.getCore().includeLibraryTheme("be.rpanneel.custom.library");
	
    /**
     * Suite controls library.
     *
     * @namespace
     * @name be.rpanneel.custom.library
     * @author Robin Panneels
     * @version ${version}
     * @public
     */
    // delegate further initialization of this library to the Core
    sap.ui.getCore().initLibrary({
        name : "be.rpanneel.custom.library",
        version: "0.0.1",
        dependencies : ["sap.ui.core", "sap.m"],
        types: [],
        interfaces: [],
        controls: [
            "be.rpanneel.custom.library.ProductRating"
        ],
        elements: []
    });

    return be.rpanneel.custom.library;

}, /* bExport= */ false);