
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcGeometricRepresentationItem = require('./IfcGeometricRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplanarextent.htm
 */
module.exports = class IfcPlanarExtent extends IfcGeometricRepresentationItem {
  
    constructor(sizeInX, sizeInY) {
        super()
		this.SizeInX = sizeInX
		this.SizeInY = sizeInY

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.SizeInX))
		parameters.push(BaseIfc.toStepValue(this.SizeInY))

        return parameters.join()
    }
}