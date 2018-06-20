
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcDataOriginEnum = require('./IfcDataOriginEnum')
const IfcDateTime = require('./IfcDateTime')
const IfcSchedulingTime = require('./IfcSchedulingTime')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifceventtime.htm
 */
module.exports = class IfcEventTime extends IfcSchedulingTime {
  
    constructor() {
        super()
        	this.ActualDate = null  // optional
	this.EarlyDate = null  // optional
	this.LateDate = null  // optional
	this.ScheduleDate = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.DataOrigin))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedDataOrigin))
		parameters.push(BaseIfc.toStepValue(this.ActualDate))
		parameters.push(BaseIfc.toStepValue(this.EarlyDate))
		parameters.push(BaseIfc.toStepValue(this.LateDate))
		parameters.push(BaseIfc.toStepValue(this.ScheduleDate))

        return parameters.join()
    }
}