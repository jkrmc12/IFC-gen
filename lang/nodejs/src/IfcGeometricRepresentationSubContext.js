
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcRepresentation = require('./IfcRepresentation')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcReal = require('./IfcReal')
const IfcAxis2Placement2D = require('./IfcAxis2Placement2D')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcDirection = require('./IfcDirection')
const IfcCoordinateOperation = require('./IfcCoordinateOperation')
const IfcGeometricRepresentationContext = require('./IfcGeometricRepresentationContext')
const IfcPositiveRatioMeasure = require('./IfcPositiveRatioMeasure')
const IfcGeometricProjectionEnum = require('./IfcGeometricProjectionEnum')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricrepresentationsubcontext.htm
 */
module.exports = class IfcGeometricRepresentationSubContext extends IfcGeometricRepresentationContext {
  
    constructor(coordinateSpaceDimension, worldCoordinateSystem, parentContext, targetView) {
        super(coordinateSpaceDimension,worldCoordinateSystem)
		this.ParentContext = parentContext
		this.TargetView = targetView

        	this.TargetScale = null  // optional
	this.UserDefinedTargetView = null  // optional

    Object.defineProperty(this, 'WorldCoordinateSystem', {
        get: () => {throw "Derived property logic has not been implemented for WorldCoordinateSystem."}, // derived
        set: (value) => {this.WorldCoordinateSystem = value}
    })

    Object.defineProperty(this, 'CoordinateSpaceDimension', {
        get: () => {throw "Derived property logic has not been implemented for CoordinateSpaceDimension."}, // derived
        set: (value) => {this.CoordinateSpaceDimension = value}
    })

    Object.defineProperty(this, 'TrueNorth', {
        get: () => {throw "Derived property logic has not been implemented for TrueNorth."}, // derived
        set: (value) => {this.TrueNorth = value}
    })

    Object.defineProperty(this, 'Precision', {
        get: () => {throw "Derived property logic has not been implemented for Precision."}, // derived
        set: (value) => {this.Precision = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ContextIdentifier))
		parameters.push(BaseIfc.toStepValue(this.ContextType))
		parameters.push("*");
		parameters.push("*");
		parameters.push("*");
		parameters.push("*");
		parameters.push(BaseIfc.toStepValue(this.ParentContext))
		parameters.push(BaseIfc.toStepValue(this.TargetScale))
		parameters.push(BaseIfc.toStepValue(this.TargetView))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedTargetView))

        return parameters.join()
    }
}