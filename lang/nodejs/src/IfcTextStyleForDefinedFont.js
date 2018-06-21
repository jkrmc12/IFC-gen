
const BaseIfc = require('./BaseIfc')
const IfcColourSpecification = require('./IfcColourSpecification')
const IfcPreDefinedColour = require('./IfcPreDefinedColour')
const IfcPresentationItem = require('./IfcPresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstylefordefinedfont.htm
 */
module.exports = class IfcTextStyleForDefinedFont extends IfcPresentationItem {
  
    constructor(colour) {
        super()
		this.Colour = colour

        	this.BackgroundColour = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Colour))
		parameters.push(BaseIfc.toStepValue(this.BackgroundColour))

        return parameters.join()
    }
}