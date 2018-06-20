
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcLabel = require('./IfcLabel')
const IfcColourRgb = require('./IfcColourRgb')
const IfcNormalisedRatioMeasure = require('./IfcNormalisedRatioMeasure')
const IfcGeometricRepresentationItem = require('./IfcGeometricRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsource.htm
 */
module.exports = class IfcLightSource extends IfcGeometricRepresentationItem {
  
    constructor(lightColour) {
        super()
		this.LightColour = lightColour

        	this.Name = null  // optional
	this.AmbientIntensity = null  // optional
	this.Intensity = null  // optional

    }
}