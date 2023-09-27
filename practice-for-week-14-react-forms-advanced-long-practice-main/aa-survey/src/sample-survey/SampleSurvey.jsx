import { useState } from "react"

const SampleSurvey = () => {
    const [user, setUser] = useState({
        reason: "",
        useOfTool: "",
        why: "",
        firstName: "",
        email: "", 
        additionalFeedback: ""
    });
    
    const [errors, setErrors] = useState([])

    const validate = () => {
        let errors = []

        if(!user.reason) {
            errors.push("Must select reason")
        }

        if(!user.useOfTool) {
            errors.push("Must select a use for this Tool")
        }

        if(!user.why) {
            errors.push("Cannot leave 'Why' blank")
        }

        if(user.why.length > 250) {
            errors.push("Character limit cannot exceed 250")
        }
        
        return errors
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        setErrors(validate())
        console.log(errors, "errors")
        console.log(user)
    }


    return (
        <>
            <h1>Sample Survey Page</h1>
            <br />
            {errors.map(error => {
                return <h2>{error}</h2>
            })}
            <form onSubmit={handleSumbit}>
                <h3>What is your reason for considering a survey?</h3>
                <label>Employee Engagement
                    <input type="radio" name="reason" value="Employee Engagement" 
                    onChange={(e) => setUser({...user, reason: e.currentTarget.value})}/>
                </label>
                <br />
                <label>Team Dynamics
                    <input type="radio" name="reason" value="Team Dynamics" 
                    onChange={(e) => setUser({...user, reason: e.currentTarget.value})}/>
                </label>
                <br />
                <label>Student Safety
                    <input type="radio" name="reason" value="Student Safety" 
                    onChange={(e) => setUser({...user, reason: e.currentTarget.value})}/>
                </label>
                <br />
                <label>Parent Involvement in Schooling
                    <input type="radio" name="reason" value="Parent Involvement in Schooling" 
                    onChange={(e) => setUser({...user, reason: e.currentTarget.value})}/>
                </label>
                <br />

                <h3>Are you planning to use this tool?</h3>
                <label>Yes
                    <input type="radio" name="useOfTool" value="Yes" 
                    onChange={(e) => setUser({...user, useOfTool: e.currentTarget.value})}/>
                </label>
                <br />
                <label>No
                    <input type="radio" name="useOfTool" value="No"
                    onChange={(e) => setUser({...user, useOfTool: e.currentTarget.value})}/>
                </label>
                <br />
                <label>Don't Know
                    <input type="radio" name="useOfTool" value="Don't know"
                    onChange={(e) => setUser({...user, useOfTool: e.currentTarget.value})}/>
                </label>
                <br />

                <h3>Why or Why Not?</h3>
                <textarea cols="30" rows="3" value={user.why}
                onChange={(e) => setUser({...user, why: e.currentTarget.value})}></textarea>
                <br />

                <section>
                    <h2>Follow Up</h2>
                    <p>Please let us know how to connect with you</p>
                    <br />
                    
                    <h3>What is your first name?</h3>
                    <input type="text" value={user.firstName} 
                    onChange={(e) => setUser({...user, firstName: e.currentTarget.value})}/>
                    <br />

                    <h3>What is your email address?</h3>
                    <input type="text" value={user.email} 
                    onChange={(e) => setUser({...user, email: e.currentTarget.value})}/>
                    <br />

                    <h3>Additional Feedback</h3>
                    <textarea cols="30" rows="10" value={user.additionalFeedback} 
                    onChange={(e) => setUser({...user, additionalFeedback: e.currentTarget.value})}></textarea>
                </section>
                <button>Submit</button>
            </form>
        </>
        
    )
}

export default SampleSurvey
