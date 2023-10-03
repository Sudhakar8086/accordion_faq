import { useState } from "react";


export default function Question ({question}) {
    const [isOpen , setOpen]  = useState(false)


    return(
        <section>
            <div>
                <h4>{question.title}</h4>
                    <button onClick={() => setOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
            </div>
            {isOpen && <p>{question.info}</p>}
        </section>
    )
}