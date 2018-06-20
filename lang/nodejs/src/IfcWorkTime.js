
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcDataOriginEnum = require('./IfcDataOriginEnum')
const IfcRecurrencePattern = require('./IfcRecurrencePattern')
const IfcDate = require('./IfcDate')
const IfcSchedulingTime = require('./IfcSchedulingTime')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcworktime.htm
 */
module.exports = class IfcWorkTime extends IfcSchedulingTime {
  
    constructor() {
        super()
        	this.RecurrencePattern = null  // optional
	this.Start = null  // optional
	this.Finish = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.DataOrigin))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedDataOrigin))
		parameters.push(BaseIfc.toStepValue(this.RecurrencePattern))
		parameters.push(BaseIfc.toStepValue(this.Start))
		parameters.push(BaseIfc.toStepValue(this.Finish))

        return parameters.join()
    }
}