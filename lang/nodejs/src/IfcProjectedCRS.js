
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcIdentifier = require('./IfcIdentifier')
const IfcCoordinateOperation = require('./IfcCoordinateOperation')
const IfcNamedUnit = require('./IfcNamedUnit')
const IfcCoordinateReferenceSystem = require('./IfcCoordinateReferenceSystem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprojectedcrs.htm
 */
module.exports = class IfcProjectedCRS extends IfcCoordinateReferenceSystem {
  
    constructor(name) {
        super(name)
        	this.MapProjection = null  // optional
	this.MapZone = null  // optional
	this.MapUnit = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.GeodeticDatum))
		parameters.push(BaseIfc.toStepValue(this.VerticalDatum))
		parameters.push(BaseIfc.toStepValue(this.MapProjection))
		parameters.push(BaseIfc.toStepValue(this.MapZone))
		parameters.push(BaseIfc.toStepValue(this.MapUnit))

        return parameters.join()
    }
}