import UserTag from "../userData/userdata"
function Header() {
    return (
        <header className="w-full bg-blue-500 flex h-[100px] relative items-center p-[10px]" >
            <h1 className="text-[30px]">Hotel Management System</h1>
            <UserTag name="Asal Samarasinghe" imgLink="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"/>
        </header>
    )
}

export default Header