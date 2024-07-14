import HierarchyChart from "./Hierarchy";
import './Organisation.css'

function OrganisationChart({data}) {
    return ( 
        <>
        <div style={{padding:'10px'}} className="tree-container">
        <div className="tree">
            <HierarchyChart data={data} />
        </div>

        </div>
        
        </>
       
     );
}

export default OrganisationChart;