
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcCartesianPoint = require('./IfcCartesianPoint')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcDirection = require('./IfcDirection')
const IfcPlacement = require('./IfcPlacement')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaxis1placement.htm
 */
module.exports = class IfcAxis1Placement extends IfcPlacement {
  
    constructor(location) {
        super(location)
        	this.Axis = null  // optional

    Object.defineProperty(this, 'Z', {
        get: () => {throw "Derived property logic has not been implemented for Z."}, // derived
        set: (value) => {this.Z = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Location))
		parameters.push(BaseIfc.toStepValue(this.Axis))

        return parameters.join()
    }
}