import { useState } from "react"


const ConditionalRender = () => {
    const [x]= useState(true);

  return (
    <div>
        <h1>Isso sera exibido?</h1>
        {x && <p>Se X for true, sim!</p>}
        {!x && <p>X é false</p>}
    </div>
  )
}

export default ConditionalRender