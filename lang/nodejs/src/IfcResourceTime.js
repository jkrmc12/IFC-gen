
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcDataOriginEnum = require('./IfcDataOriginEnum')
const IfcDuration = require('./IfcDuration')
const IfcPositiveRatioMeasure = require('./IfcPositiveRatioMeasure')
const IfcDateTime = require('./IfcDateTime')
const IfcBoolean = require('./IfcBoolean')
const IfcSchedulingTime = require('./IfcSchedulingTime')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcresourcetime.htm
 */
module.exports = class IfcResourceTime extends IfcSchedulingTime {
  
    constructor() {
        super()
        	this.ScheduleWork = null  // optional
	this.ScheduleUsage = null  // optional
	this.ScheduleStart = null  // optional
	this.ScheduleFinish = null  // optional
	this.ScheduleContour = null  // optional
	this.LevelingDelay = null  // optional
	this.IsOverAllocated = null  // optional
	this.StatusTime = null  // optional
	this.ActualWork = null  // optional
	this.ActualUsage = null  // optional
	this.ActualStart = null  // optional
	this.ActualFinish = null  // optional
	this.RemainingWork = null  // optional
	this.RemainingUsage = null  // optional
	this.Completion = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.DataOrigin))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedDataOrigin))
		parameters.push(BaseIfc.toStepValue(this.ScheduleWork))
		parameters.push(BaseIfc.toStepValue(this.ScheduleUsage))
		parameters.push(BaseIfc.toStepValue(this.ScheduleStart))
		parameters.push(BaseIfc.toStepValue(this.ScheduleFinish))
		parameters.push(BaseIfc.toStepValue(this.ScheduleContour))
		parameters.push(BaseIfc.toStepValue(this.LevelingDelay))
		parameters.push(BaseIfc.toStepValue(this.IsOverAllocated))
		parameters.push(BaseIfc.toStepValue(this.StatusTime))
		parameters.push(BaseIfc.toStepValue(this.ActualWork))
		parameters.push(BaseIfc.toStepValue(this.ActualUsage))
		parameters.push(BaseIfc.toStepValue(this.ActualStart))
		parameters.push(BaseIfc.toStepValue(this.ActualFinish))
		parameters.push(BaseIfc.toStepValue(this.RemainingWork))
		parameters.push(BaseIfc.toStepValue(this.RemainingUsage))
		parameters.push(BaseIfc.toStepValue(this.Completion))

        return parameters.join()
    }
}