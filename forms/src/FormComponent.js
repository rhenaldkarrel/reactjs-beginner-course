import React from "react"

function FormComponent(props){
    return(
        <main>
            <form>
            <input  
                value={props.data.firstName} 
                name="firstName" 
                onChange={props.handleChange}
                placeholder="First Name" 
            />
            
            <br />

            <input
                value={props.data.lastName}
                name="lastName" 
                onChange={props.handleChange}
                placeholder="Last Name" 
            /> 
            
            <br />

            <input 
                value={props.data.age}
                name="age" 
                onChange={props.handleChange}
                placeholder="Age" 
            />
            
            <br />

            <label>
                <input 
                type="radio" 
                name="gender" 
                value="male" 
                onChange={props.handleChange}
                checked={props.data.gender === "male"}
                /> Male 
            </label>
            
            <br />

            <label>
                <input 
                type="radio" 
                name="gender" 
                value="female"
                onChange={props.handleChange}
                checked={props.data.gender === "female"}
                /> Female
            </label>

            <br />

            <select 
                value={props.data.destination}
                name="destination"
                onChange={props.handleChange}
            >
                <option value="">-- Please Choose a Destination --</option>
                <option value="germany">Germany</option>
                <option value="norway">Norway</option>
                <option value="north pole">North Pole</option>
                <option value="south pole">South Pole</option>
            </select>

            <br />

            <label>
                <input 
                type="checkbox" 
                name="isVegan" 
                onChange={props.handleChange} 
                checked={props.data.dietaryRestrictions.isVegan} 
                /> Vegan?
            </label> 

            <br />

            <label>
                <input 
                type="checkbox" 
                name="isKashor" 
                onChange={props.handleChange} 
                checked={props.data.dietaryRestrictions.isKashor} 
                /> Kashor?
            </label> 

            <br />

            <label>
                <input 
                type="checkbox" 
                name="isLactoseFree" 
                onChange={props.handleChange} 
                checked={props.data.dietaryRestrictions.isLactoseFree}
                /> Lactose Free?
            </label> 

            <br />

            <button>Submit</button>
            </form>

            <hr />
            <h2>Entered Information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your dietary restrictions:</p>
            <p>Vegan: {props.data.dietaryRestrictions.isVegan ? "Yes" : "No"}</p>
            <p>Kosher: {props.data.dietaryRestrictions.isKosher ? "Yes" : "No"}</p>
            <p>Lactose Free: {props.data.dietaryRestrictions.isLactoseFree ? "Yes" : "No"}</p>
        </main>
        ) 
}

export default FormComponent