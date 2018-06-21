
const BaseIfc = require('./BaseIfc')
const IfcURIReference = require('./IfcURIReference')
const IfcIdentifier = require('./IfcIdentifier')
const IfcLabel = require('./IfcLabel')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcExternalReference = require('./IfcExternalReference')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternallydefinedtextfont.htm
 */
module.exports = class IfcExternallyDefinedTextFont extends IfcExternalReference {
  
    constructor() {
        super()
        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Location))
		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.Name))

        return parameters.join()
    }
}