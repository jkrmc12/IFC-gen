
const BaseIfc = require('./BaseIfc')
const IfcCoordinateReferenceSystem = require('./IfcCoordinateReferenceSystem')
const IfcGeometricRepresentationContext = require('./IfcGeometricRepresentationContext')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcReal = require('./IfcReal')
const IfcCoordinateOperation = require('./IfcCoordinateOperation')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmapconversion.htm
 */
module.exports = class IfcMapConversion extends IfcCoordinateOperation {
  
    constructor(sourceCRS, targetCRS, eastings, northings, orthogonalHeight) {
        super(sourceCRS,targetCRS)
		this.Eastings = eastings
		this.Northings = northings
		this.OrthogonalHeight = orthogonalHeight

        	this.XAxisAbscissa = null  // optional
	this.XAxisOrdinate = null  // optional
	this.Scale = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.SourceCRS))
		parameters.push(BaseIfc.toStepValue(this.TargetCRS))
		parameters.push(BaseIfc.toStepValue(this.Eastings))
		parameters.push(BaseIfc.toStepValue(this.Northings))
		parameters.push(BaseIfc.toStepValue(this.OrthogonalHeight))
		parameters.push(BaseIfc.toStepValue(this.XAxisAbscissa))
		parameters.push(BaseIfc.toStepValue(this.XAxisOrdinate))
		parameters.push(BaseIfc.toStepValue(this.Scale))

        return parameters.join()
    }
}