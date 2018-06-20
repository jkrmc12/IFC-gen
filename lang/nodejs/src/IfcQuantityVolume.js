
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcPhysicalComplexQuantity = require('./IfcPhysicalComplexQuantity')
const IfcNamedUnit = require('./IfcNamedUnit')
const IfcVolumeMeasure = require('./IfcVolumeMeasure')
const IfcPhysicalSimpleQuantity = require('./IfcPhysicalSimpleQuantity')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantityvolume.htm
 */
module.exports = class IfcQuantityVolume extends IfcPhysicalSimpleQuantity {
  
    constructor(name, volumeValue) {
        super(name)
		this.VolumeValue = volumeValue

        	this.Formula = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Unit))
		parameters.push(BaseIfc.toStepValue(this.VolumeValue))
		parameters.push(BaseIfc.toStepValue(this.Formula))

        return parameters.join()
    }
}