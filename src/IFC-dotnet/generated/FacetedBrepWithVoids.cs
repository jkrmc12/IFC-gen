/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacetedbrepwithvoids.htm
	/// </summary>
	internal  partial class FacetedBrepWithVoids : FacetedBrep 
	{
		public FacetedBrepWithVoidsVoids Voids {get;set;}

		public FacetedBrepWithVoids(FacetedBrepWithVoidsVoids voids,
				ClosedShell outer,
				StyledItem styledByItem) : base(outer,
				styledByItem)
		{
			this.Voids = voids;
		}
	}
}