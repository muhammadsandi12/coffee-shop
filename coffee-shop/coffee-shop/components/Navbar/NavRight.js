import Link from "next/link"
import Button from "./Button"

export default function NavRight() {
    return (
        <>
            <div>
                <Button href="/signin" variant="white" >
                    Login
                </Button>
                <Button href="/signup" variant="yellow">
                    Sign Up
                </Button>
            </div>
        </>
    )
}   