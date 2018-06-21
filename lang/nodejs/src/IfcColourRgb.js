
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcNormalisedRatioMeasure = require('./IfcNormalisedRatioMeasure')
const IfcColourSpecification = require('./IfcColourSpecification')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolourrgb.htm
 */
module.exports = class IfcColourRgb extends IfcColourSpecification {
  
    constructor(red, green, blue) {
        super()
		this.Red = red
		this.Green = green
		this.Blue = blue

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Red))
		parameters.push(BaseIfc.toStepValue(this.Green))
		parameters.push(BaseIfc.toStepValue(this.Blue))

        return parameters.join()
    }
}