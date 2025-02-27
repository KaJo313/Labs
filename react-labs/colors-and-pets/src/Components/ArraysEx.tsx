import { useState } from "react"
import Pet from "./Pet"

const ArraysEx = () => {
  const [colors, setColors] = useState(["red", "orange", "yellow"])

  const addColor = (color: string): void => {
    setColors([...colors, color])
  }

  const [pets, setPets] = useState([
    { name: "Ralph", type: "dog", petId: 1001 },
    { name: "Sandy", type: "cat", petId: 2001 },
    { name: "Fior", type: "lizard", petId: 5001 },
    { name: "Scruffy", type: "dog", petId: 1002 }
  ])

  const deletePet = (index: number) => {
    const updatedPets = [...pets.slice(0, index), ...pets.slice(index + 1)]
    setPets(updatedPets)
  }

  return (
    <>
      <h1>Arrays Exercise</h1>
      <h2>Colors</h2>
      <ol>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ol>
      <button onClick={() => addColor("green")}>Add Green</button>
      <button onClick={() => addColor("blue")}>Add Blue</button>
      <button onClick={() => addColor("violet")}>Add Violet</button>
      <br></br>
      <h2>Pets</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet, index) => (
            <tr key={pet.petId}>
              <td>{pet.name}</td>
              <td>{pet.type}</td>
              <td>
                <button onClick={() => deletePet(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ArraysEx
