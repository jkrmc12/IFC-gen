
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcLabel = require('./IfcLabel')
const IfcColourRgb = require('./IfcColourRgb')
const IfcNormalisedRatioMeasure = require('./IfcNormalisedRatioMeasure')
const IfcLightSource = require('./IfcLightSource')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourceambient.htm
 */
module.exports = class IfcLightSourceAmbient extends IfcLightSource {
  
    constructor(lightColour) {
        super(lightColour)
        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.LightColour))
		parameters.push(BaseIfc.toStepValue(this.AmbientIntensity))
		parameters.push(BaseIfc.toStepValue(this.Intensity))

        return parameters.join()
    }
}