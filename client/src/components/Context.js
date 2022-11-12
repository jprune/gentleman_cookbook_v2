import { createContext, useReducer } from "react"

export const AppContext = createContext()

export default function ContextProvider({children}) {

    const reducer = (state, action) => {

        switch (action.type) {

            case ('login'):
                return {
                    ...state,
                    user: action.payload
                }
            case ('getUser'):
                return {
                    ...state,
                    posts: action.payload
                }
            case ('addRecipe'):
                return {
                    ...state,
                    recipe: [...state.recipes, action.payload]
                }
            case ('getRecipe'):
                return {
                    ...state,
                    recipe: action.payload
                }
            default:
                return
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        user: "",
    })

    return <AppContext.Provider value={{state, dispatch}}>
        {children}
    </AppContext.Provider>
}