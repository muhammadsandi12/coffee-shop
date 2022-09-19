export default function Logo() {
    return (
        <>
            <div className="flex items-center ">
                <img src={"/coffee.png"} width={30} height={33}/>
                <div className="text-xl ml-4 font-bold  text-black">
                    Coffee Shop
                </div>
            </div>
        </>
    )
}