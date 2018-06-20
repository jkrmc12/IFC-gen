
const BaseIfc = require('./BaseIfc')
const IfcColourRgb = require('./IfcColourRgb')
const IfcNormalisedRatioMeasure = require('./IfcNormalisedRatioMeasure')
const IfcPresentationItem = require('./IfcPresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestyleshading.htm
 */
module.exports = class IfcSurfaceStyleShading extends IfcPresentationItem {
  
    constructor(surfaceColour) {
        super()
		this.SurfaceColour = surfaceColour

        	this.Transparency = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.SurfaceColour))
		parameters.push(BaseIfc.toStepValue(this.Transparency))

        return parameters.join()
    }
}