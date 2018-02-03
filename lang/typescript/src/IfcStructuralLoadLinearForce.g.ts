
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcLinearForceMeasure} from "./IfcLinearForceMeasure.g"
import {IfcLinearMomentMeasure} from "./IfcLinearMomentMeasure.g"
import {IfcStructuralLoadStatic} from "./IfcStructuralLoadStatic.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadlinearforce.htm
 */
export class IfcStructuralLoadLinearForce extends IfcStructuralLoadStatic {
	LinearForceX : IfcLinearForceMeasure // optional
	LinearForceY : IfcLinearForceMeasure // optional
	LinearForceZ : IfcLinearForceMeasure // optional
	LinearMomentX : IfcLinearMomentMeasure // optional
	LinearMomentY : IfcLinearMomentMeasure // optional
	LinearMomentZ : IfcLinearMomentMeasure // optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.LinearForceX != null ? BaseIfc.toStepValue(this.LinearForceX) : "$");
		parameters.push(this.LinearForceY != null ? BaseIfc.toStepValue(this.LinearForceY) : "$");
		parameters.push(this.LinearForceZ != null ? BaseIfc.toStepValue(this.LinearForceZ) : "$");
		parameters.push(this.LinearMomentX != null ? BaseIfc.toStepValue(this.LinearMomentX) : "$");
		parameters.push(this.LinearMomentY != null ? BaseIfc.toStepValue(this.LinearMomentY) : "$");
		parameters.push(this.LinearMomentZ != null ? BaseIfc.toStepValue(this.LinearMomentZ) : "$");

        return parameters.join();
    }
}