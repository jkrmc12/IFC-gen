
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcDataOriginEnum = require('./IfcDataOriginEnum')
const IfcTaskDurationEnum = require('./IfcTaskDurationEnum')
const IfcDuration = require('./IfcDuration')
const IfcDateTime = require('./IfcDateTime')
const IfcBoolean = require('./IfcBoolean')
const IfcPositiveRatioMeasure = require('./IfcPositiveRatioMeasure')
const IfcRecurrencePattern = require('./IfcRecurrencePattern')
const IfcTaskTime = require('./IfcTaskTime')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctasktimerecurring.htm
 */
module.exports = class IfcTaskTimeRecurring extends IfcTaskTime {
  
    constructor(recurrence) {
        super()
		this.Recurrence = recurrence

        
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
		parameters.push(BaseIfc.toStepValue(this.Recurrence))

        return parameters.join()
    }
}