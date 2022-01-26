import { click } from "@testing-library/user-event/dist/click"
import React from "react"

export const Button = ({ symbol, submit }) => {
  return <button onClick={() => click(symbol.submit)}>{<value className="displaysymbol"></value> ? symbol.displaysymbol : symbol.symbol}</button>
}