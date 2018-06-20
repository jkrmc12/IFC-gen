
const BaseIfc = require('./BaseIfc')
const IfcCoordinateReferenceSystem = require('./IfcCoordinateReferenceSystem')
const IfcGeometricRepresentationContext = require('./IfcGeometricRepresentationContext')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccoordinateoperation.htm
 */
module.exports = class IfcCoordinateOperation extends BaseIfc {
  
    constructor(sourceCRS, targetCRS) {
        super()
		this.SourceCRS = sourceCRS
		this.TargetCRS = targetCRS

        
    }
}