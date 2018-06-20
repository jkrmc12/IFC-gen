
const BaseIfc = require('./BaseIfc')
const IfcColourRgb = require('./IfcColourRgb')
const IfcNormalisedRatioMeasure = require('./IfcNormalisedRatioMeasure')
const IfcSpecularExponent = require('./IfcSpecularExponent')
const IfcSpecularRoughness = require('./IfcSpecularRoughness')
const IfcReflectanceMethodEnum = require('./IfcReflectanceMethodEnum')
const IfcSurfaceStyleShading = require('./IfcSurfaceStyleShading')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylerendering.htm
 */
module.exports = class IfcSurfaceStyleRendering extends IfcSurfaceStyleShading {
  
    constructor(surfaceColour, reflectanceMethod) {
        super(surfaceColour)
		this.ReflectanceMethod = reflectanceMethod

        	this.DiffuseColour = null  // optional
	this.TransmissionColour = null  // optional
	this.DiffuseTransmissionColour = null  // optional
	this.ReflectionColour = null  // optional
	this.SpecularColour = null  // optional
	this.SpecularHighlight = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.SurfaceColour))
		parameters.push(BaseIfc.toStepValue(this.Transparency))
		parameters.push(BaseIfc.toStepValue(this.DiffuseColour))
		parameters.push(BaseIfc.toStepValue(this.TransmissionColour))
		parameters.push(BaseIfc.toStepValue(this.DiffuseTransmissionColour))
		parameters.push(BaseIfc.toStepValue(this.ReflectionColour))
		parameters.push(BaseIfc.toStepValue(this.SpecularColour))
		parameters.push(BaseIfc.toStepValue(this.SpecularHighlight))
		parameters.push(BaseIfc.toStepValue(this.ReflectanceMethod))

        return parameters.join()
    }
}