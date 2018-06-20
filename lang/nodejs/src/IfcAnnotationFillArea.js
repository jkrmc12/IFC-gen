
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcCurve = require('./IfcCurve')
const IfcGeometricRepresentationItem = require('./IfcGeometricRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcannotationfillarea.htm
 */
module.exports = class IfcAnnotationFillArea extends IfcGeometricRepresentationItem {
  
    constructor(outerBoundary) {
        super()
		this.OuterBoundary = outerBoundary

        	this.InnerBoundaries = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.OuterBoundary))
		parameters.push(BaseIfc.toStepValue(this.InnerBoundaries))

        return parameters.join()
    }
}