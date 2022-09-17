import React from 'react'

function App() {
    return (
        <>
            <div className="bg-image"></div>
            <h1>Recap</h1>
            <fieldset className="learning-takeaways">
                <legend>Learning Takeaways</legend>
                <label>
                    <input type="checkbox" />
                    Explain what Redux allows you to do
                </label>
                <label>
                    <input type="checkbox" />
                    How do components interact with a store?
                </label>
                <label>
                    <input type="checkbox" />
                    Be able to connect Redux to React, set up a store
                </label>
                <label>
                    <input type="checkbox" />
                    Concat, or update the copy of a store's properties via actions
                </label>
                <label>
                    <input type="checkbox" />
                    Work with data loaded asynchronously in some update to a property
                </label>
                <label>
                    <input type="checkbox" />
                    Bonus: Understand the tracking capabilities of Redux DevTools
                </label>  
            </fieldset>
        </>
    )
}

export default App