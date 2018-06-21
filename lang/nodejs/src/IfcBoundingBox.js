
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcCartesianPoint = require('./IfcCartesianPoint')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcGeometricRepresentationItem = require('./IfcGeometricRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundingbox.htm
 */
module.exports = class IfcBoundingBox extends IfcGeometricRepresentationItem {
  
    constructor(corner, xDim, yDim, zDim) {
        super()
		this.Corner = corner
		this.XDim = xDim
		this.YDim = yDim
		this.ZDim = zDim

        
    Object.defineProperty(this, 'Dim', {
        get: () => {throw "Derived property logic has not been implemented for Dim."}, // derived
        set: (value) => {this.Dim = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Corner))
		parameters.push(BaseIfc.toStepValue(this.XDim))
		parameters.push(BaseIfc.toStepValue(this.YDim))
		parameters.push(BaseIfc.toStepValue(this.ZDim))

        return parameters.join()
    }
}