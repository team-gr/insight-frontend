import { Input } from "antd";
import { useReducer, useState } from "react";
import ListShops from "../components/ShopList";

const { Search } = Input;

export const Context = React.createContext();

export const actions = {
    SET_LOADING: "set_loading",
    SET_SHOPS: "set_shops",
}

const initialState = { loading: false, shops: [] }

function reducer(state, action) {
    switch (action.type) {
        case actions.SET_LOADING:
            return { ...state, loading: action.payload }
        case actions.SET_SHOPS:
            return { ...state, shops: action.payload }
        default:
            return state
    }
}


export default function SimilarShopsHome({ shops }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [open, setOpen] = useState(false)

    const [shops, setShops] = useState(shops)

    return (
        <Context.Provider value={{ state, dispatch }}>
            <Search placeholder="Shop URL" enterButton="Search" size="large" onSearch={() => search()} />
            <ListShops shops={shops} />
        </Context.Provider>
    )

    function search() {
        dispatch({ type: actions.SET_LOADING, payload: true })

    }
}
