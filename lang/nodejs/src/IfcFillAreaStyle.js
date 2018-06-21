
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcColourSpecification = require('./IfcColourSpecification')
const IfcPreDefinedColour = require('./IfcPreDefinedColour')
const IfcExternallyDefinedHatchStyle = require('./IfcExternallyDefinedHatchStyle')
const IfcFillAreaStyleHatching = require('./IfcFillAreaStyleHatching')
const IfcFillAreaStyleTiles = require('./IfcFillAreaStyleTiles')
const IfcBoolean = require('./IfcBoolean')
const IfcPresentationStyle = require('./IfcPresentationStyle')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastyle.htm
 */
module.exports = class IfcFillAreaStyle extends IfcPresentationStyle {
  
    constructor(fillStyles) {
        super()
		this.FillStyles = fillStyles

        	this.ModelorDraughting = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.FillStyles))
		parameters.push(BaseIfc.toStepValue(this.ModelorDraughting))

        return parameters.join()
    }
}