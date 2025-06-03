import Navbar from "@/components/organisems/Navbar"

const HomeLayout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default HomeLayout