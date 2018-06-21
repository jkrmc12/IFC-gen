
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcRepresentation = require('./IfcRepresentation')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcReal = require('./IfcReal')
const IfcAxis2Placement2D = require('./IfcAxis2Placement2D')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcDirection = require('./IfcDirection')
const IfcGeometricRepresentationSubContext = require('./IfcGeometricRepresentationSubContext')
const IfcCoordinateOperation = require('./IfcCoordinateOperation')
const IfcRepresentationContext = require('./IfcRepresentationContext')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricrepresentationcontext.htm
 */
module.exports = class IfcGeometricRepresentationContext extends IfcRepresentationContext {
  
    constructor(coordinateSpaceDimension, worldCoordinateSystem) {
        super()
		this.CoordinateSpaceDimension = coordinateSpaceDimension
		this.WorldCoordinateSystem = worldCoordinateSystem

        	this.Precision = null  // optional
	this.TrueNorth = null  // optional
	this.HasSubContexts = null  // inverse
	this.HasCoordinateOperation = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ContextIdentifier))
		parameters.push(BaseIfc.toStepValue(this.ContextType))
		parameters.push(BaseIfc.toStepValue(this.CoordinateSpaceDimension))
		parameters.push(BaseIfc.toStepValue(this.Precision))
		parameters.push(BaseIfc.toStepValue(this.WorldCoordinateSystem))
		parameters.push(BaseIfc.toStepValue(this.TrueNorth))

        return parameters.join()
    }
}