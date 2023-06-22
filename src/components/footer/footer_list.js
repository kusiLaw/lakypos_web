import Link from "next/link"

const FooterList = ({header, list = []}) => {
 return(
    <div className="">
        <h2 className="font-semibold text-md md:text-xl capitalize py-5 ">{header}</h2>
        <div className="flex flex-col text-normal md:text-lg font-light gap-3">
            {
            list.map((lists) =>(
                <Link key ={lists[0] && lists[0]} href={lists[1]?  lists[1] : '#'} className="capitalize hover:text-context_color">
                    {lists[0] && lists[0] }
                </Link>
            ))
            }
        </div>

    </div>
 )
}

export default FooterList
