
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcDataOriginEnum = require('./IfcDataOriginEnum')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcschedulingtime.htm
 */
module.exports = class IfcSchedulingTime extends BaseIfc {
  
    constructor() {
        super()
        	this.Name = null  // optional
	this.DataOrigin = null  // optional
	this.UserDefinedDataOrigin = null  // optional

    }
}