
const BaseIfc = require('./BaseIfc')
const IfcAddressTypeEnum = require('./IfcAddressTypeEnum')
const IfcText = require('./IfcText')
const IfcLabel = require('./IfcLabel')
const IfcPerson = require('./IfcPerson')
const IfcOrganization = require('./IfcOrganization')
const IfcAddress = require('./IfcAddress')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpostaladdress.htm
 */
module.exports = class IfcPostalAddress extends IfcAddress {
  
    constructor() {
        super()
        	this.InternalLocation = null  // optional
	this.AddressLines = null  // optional
	this.PostalBox = null  // optional
	this.Town = null  // optional
	this.Region = null  // optional
	this.PostalCode = null  // optional
	this.Country = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Purpose))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedPurpose))
		parameters.push(BaseIfc.toStepValue(this.InternalLocation))
		parameters.push(BaseIfc.toStepValue(this.AddressLines))
		parameters.push(BaseIfc.toStepValue(this.PostalBox))
		parameters.push(BaseIfc.toStepValue(this.Town))
		parameters.push(BaseIfc.toStepValue(this.Region))
		parameters.push(BaseIfc.toStepValue(this.PostalCode))
		parameters.push(BaseIfc.toStepValue(this.Country))

        return parameters.join()
    }
}