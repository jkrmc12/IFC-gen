
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcSurface = require('./IfcSurface')
const IfcBoolean = require('./IfcBoolean')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcGeometricRepresentationItem = require('./IfcGeometricRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifchalfspacesolid.htm
 */
module.exports = class IfcHalfSpaceSolid extends IfcGeometricRepresentationItem {
  
    constructor(baseSurface, agreementFlag) {
        super()
		this.BaseSurface = baseSurface
		this.AgreementFlag = agreementFlag

        
    Object.defineProperty(this, 'Dim', {
        get: () => {throw "Derived property logic has not been implemented for Dim."}, // derived
        set: (value) => {this.Dim = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.BaseSurface))
		parameters.push(BaseIfc.toStepValue(this.AgreementFlag))

        return parameters.join()
    }
}