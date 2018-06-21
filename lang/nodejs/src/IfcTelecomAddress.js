
const BaseIfc = require('./BaseIfc')
const IfcAddressTypeEnum = require('./IfcAddressTypeEnum')
const IfcText = require('./IfcText')
const IfcLabel = require('./IfcLabel')
const IfcPerson = require('./IfcPerson')
const IfcOrganization = require('./IfcOrganization')
const IfcURIReference = require('./IfcURIReference')
const IfcAddress = require('./IfcAddress')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctelecomaddress.htm
 */
module.exports = class IfcTelecomAddress extends IfcAddress {
  
    constructor() {
        super()
        	this.TelephoneNumbers = null  // optional
	this.FacsimileNumbers = null  // optional
	this.PagerNumber = null  // optional
	this.ElectronicMailAddresses = null  // optional
	this.WWWHomePageURL = null  // optional
	this.MessagingIDs = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Purpose))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedPurpose))
		parameters.push(BaseIfc.toStepValue(this.TelephoneNumbers))
		parameters.push(BaseIfc.toStepValue(this.FacsimileNumbers))
		parameters.push(BaseIfc.toStepValue(this.PagerNumber))
		parameters.push(BaseIfc.toStepValue(this.ElectronicMailAddresses))
		parameters.push(BaseIfc.toStepValue(this.WWWHomePageURL))
		parameters.push(BaseIfc.toStepValue(this.MessagingIDs))

        return parameters.join()
    }
}