
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDirection = require('./IfcDirection')
const IfcCartesianPoint = require('./IfcCartesianPoint')
const IfcReal = require('./IfcReal')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcGeometricRepresentationItem = require('./IfcGeometricRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator.htm
 */
module.exports = class IfcCartesianTransformationOperator extends IfcGeometricRepresentationItem {
  
    constructor(localOrigin) {
        super()
		this.LocalOrigin = localOrigin

        	this.Axis1 = null  // optional
	this.Axis2 = null  // optional
	this.Scale = null  // optional

    Object.defineProperty(this, 'Scl', {
        get: () => {throw "Derived property logic has not been implemented for Scl."}, // derived
        set: (value) => {this.Scl = value}
    })

    Object.defineProperty(this, 'Dim', {
        get: () => {throw "Derived property logic has not been implemented for Dim."}, // derived
        set: (value) => {this.Dim = value}
    })

    }
}