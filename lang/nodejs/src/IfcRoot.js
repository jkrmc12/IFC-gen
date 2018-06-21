
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcroot.htm
 */
module.exports = class IfcRoot extends BaseIfc {
  
    constructor(globalId) {
        super()
		this.GlobalId = globalId

        	this.OwnerHistory = null  // optional
	this.Name = null  // optional
	this.Description = null  // optional

    }
}