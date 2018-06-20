
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcresourcelevelrelationship.htm
 */
module.exports = class IfcResourceLevelRelationship extends BaseIfc {
  
    constructor() {
        super()
        	this.Name = null  // optional
	this.Description = null  // optional

    }
}