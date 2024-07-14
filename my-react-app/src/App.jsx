import { useEffect, useState } from 'react';
import './App.css'
import JsonInput from './componets/JsonInput';
import OrganisationChart from './componets/Organisationchart';
import defaultData from './data'
import Split from "react-split";

function App() {
    const [data, setData] = useState(defaultData);
    
 return (
    <Split className='split' minSize={0}>
    <JsonInput setData={setData}/>
    <OrganisationChart data={data}/>
</Split>)
}

export default App
