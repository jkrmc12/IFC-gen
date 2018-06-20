
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDirection = require('./IfcDirection')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcGeometricRepresentationItem = require('./IfcGeometricRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvector.htm
 */
module.exports = class IfcVector extends IfcGeometricRepresentationItem {
  
    constructor(orientation, magnitude) {
        super()
		this.Orientation = orientation
		this.Magnitude = magnitude

        
    Object.defineProperty(this, 'Dim', {
        get: () => {throw "Derived property logic has not been implemented for Dim."}, // derived
        set: (value) => {this.Dim = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Orientation))
		parameters.push(BaseIfc.toStepValue(this.Magnitude))

        return parameters.join()
    }
}