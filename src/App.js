import Question from "./Question";
import "./styles.css"






const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    info:
      "Yeah, it's a nice product, good performance, value for money  " },
  {
    id: 2,
    title: "How much does it cost?",
    info:
      "It costs around ₹41,990.00 with '-22%' offer, and M.R.P.: ₹54,102, Inclusive of all taxes, EMI starts at ₹2,036 - No Cost EMI available EMI options."
  },
  {
    id: 3,
    title: "When can I get it?",
    info:
      "By saturday, next week (14th of October 2023)."
  }
];


export default function App(){

  return (
    <>
    <h1>
      FAQ/ ACCORDION
    </h1>
    <div className="container">
        <h2>Frequently Asked Questions</h2>

        <div className="questions">

          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
          
        </div>
      </div>
    </>
  )
}



