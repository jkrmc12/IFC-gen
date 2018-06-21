
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcPoint = require('./IfcPoint')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesianpoint.htm
 */
module.exports = class IfcCartesianPoint extends IfcPoint {
  
    constructor(coordinates) {
        super()
		this.Coordinates = coordinates

        
    Object.defineProperty(this, 'Dim', {
        get: () => {throw "Derived property logic has not been implemented for Dim."}, // derived
        set: (value) => {this.Dim = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Coordinates))

        return parameters.join()
    }
}