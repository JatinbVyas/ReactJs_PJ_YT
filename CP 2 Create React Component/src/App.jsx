import ButtonCP from "./ButtonCP"
import DynamicUse from "./DynamicUse"
import Random from "./ReandomNB"

/**
 * Below is functional component.
 * When it called, it will returns H1 tag with content. 
 * Earlier class component were used but now they are not used anymore.
 */
function App(){
  return <div>
    <h1>Hello This is React App file changes.</h1>
    <DynamicUse></DynamicUse>
    <Random></Random>
    <Random></Random>
    <Random></Random>
    <Random></Random>
    <Random></Random>
    <ButtonCP></ButtonCP>
    </div>
}

//Below export default used to export this App function/component to use at diffrent place.
export default App
