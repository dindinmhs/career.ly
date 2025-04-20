import Navbar from "@/components/Navbar";

const NavbarLayout = ({
    children
}:{
    children: React.ReactNode;
}) => {
    return(
        <>
            <Navbar/>
            {children}
        </>
    )
}

export default NavbarLayout;