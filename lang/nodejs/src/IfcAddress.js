
const BaseIfc = require('./BaseIfc')
const IfcAddressTypeEnum = require('./IfcAddressTypeEnum')
const IfcText = require('./IfcText')
const IfcLabel = require('./IfcLabel')
const IfcPerson = require('./IfcPerson')
const IfcOrganization = require('./IfcOrganization')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaddress.htm
 */
module.exports = class IfcAddress extends BaseIfc {
  
    constructor() {
        super()
        	this.Purpose = null  // optional
	this.Description = null  // optional
	this.UserDefinedPurpose = null  // optional
	this.OfPerson = null  // inverse
	this.OfOrganization = null  // inverse

    }
}