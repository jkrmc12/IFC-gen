
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcDataOriginEnum = require('./IfcDataOriginEnum')
const IfcTaskDurationEnum = require('./IfcTaskDurationEnum')
const IfcDuration = require('./IfcDuration')
const IfcDateTime = require('./IfcDateTime')
const IfcBoolean = require('./IfcBoolean')
const IfcPositiveRatioMeasure = require('./IfcPositiveRatioMeasure')
const IfcSchedulingTime = require('./IfcSchedulingTime')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctasktime.htm
 */
module.exports = class IfcTaskTime extends IfcSchedulingTime {
  
    constructor() {
        super()
        	this.DurationType = null  // optional
	this.ScheduleDuration = null  // optional
	this.ScheduleStart = null  // optional
	this.ScheduleFinish = null  // optional
	this.EarlyStart = null  // optional
	this.EarlyFinish = null  // optional
	this.LateStart = null  // optional
	this.LateFinish = null  // optional
	this.FreeFloat = null  // optional
	this.TotalFloat = null  // optional
	this.IsCritical = null  // optional
	this.StatusTime = null  // optional
	this.ActualDuration = null  // optional
	this.ActualStart = null  // optional
	this.ActualFinish = null  // optional
	this.RemainingTime = null  // optional
	this.Completion = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.DataOrigin))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedDataOrigin))
		parameters.push(BaseIfc.toStepValue(this.DurationType))
		parameters.push(BaseIfc.toStepValue(this.ScheduleDuration))
		parameters.push(BaseIfc.toStepValue(this.ScheduleStart))
		parameters.push(BaseIfc.toStepValue(this.ScheduleFinish))
		parameters.push(BaseIfc.toStepValue(this.EarlyStart))
		parameters.push(BaseIfc.toStepValue(this.EarlyFinish))
		parameters.push(BaseIfc.toStepValue(this.LateStart))
		parameters.push(BaseIfc.toStepValue(this.LateFinish))
		parameters.push(BaseIfc.toStepValue(this.FreeFloat))
		parameters.push(BaseIfc.toStepValue(this.TotalFloat))
		parameters.push(BaseIfc.toStepValue(this.IsCritical))
		parameters.push(BaseIfc.toStepValue(this.StatusTime))
		parameters.push(BaseIfc.toStepValue(this.ActualDuration))
		parameters.push(BaseIfc.toStepValue(this.ActualStart))
		parameters.push(BaseIfc.toStepValue(this.ActualFinish))
		parameters.push(BaseIfc.toStepValue(this.RemainingTime))
		parameters.push(BaseIfc.toStepValue(this.Completion))

        return parameters.join()
    }
}