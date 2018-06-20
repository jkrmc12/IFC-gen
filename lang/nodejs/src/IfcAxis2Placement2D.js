
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcCartesianPoint = require('./IfcCartesianPoint')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcDirection = require('./IfcDirection')
const IfcPlacement = require('./IfcPlacement')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaxis2placement2d.htm
 */
module.exports = class IfcAxis2Placement2D extends IfcPlacement {
  
    constructor(location) {
        super(location)
        	this.RefDirection = null  // optional

    Object.defineProperty(this, 'P', {
        get: () => {throw "Derived property logic has not been implemented for P."}, // derived
        set: (value) => {this.P = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Location))
		parameters.push(BaseIfc.toStepValue(this.RefDirection))

        return parameters.join()
    }
}