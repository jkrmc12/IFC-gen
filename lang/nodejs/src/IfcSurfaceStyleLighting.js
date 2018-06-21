
const BaseIfc = require('./BaseIfc')
const IfcColourRgb = require('./IfcColourRgb')
const IfcPresentationItem = require('./IfcPresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylelighting.htm
 */
module.exports = class IfcSurfaceStyleLighting extends IfcPresentationItem {
  
    constructor(diffuseTransmissionColour, diffuseReflectionColour, transmissionColour, reflectanceColour) {
        super()
		this.DiffuseTransmissionColour = diffuseTransmissionColour
		this.DiffuseReflectionColour = diffuseReflectionColour
		this.TransmissionColour = transmissionColour
		this.ReflectanceColour = reflectanceColour

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.DiffuseTransmissionColour))
		parameters.push(BaseIfc.toStepValue(this.DiffuseReflectionColour))
		parameters.push(BaseIfc.toStepValue(this.TransmissionColour))
		parameters.push(BaseIfc.toStepValue(this.ReflectanceColour))

        return parameters.join()
    }
}