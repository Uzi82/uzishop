import { FC } from "react";
import { likedCart } from "../../supaBase/types";

type props = {
    cart: Array<likedCart>
}

const BillList: FC<props> = ({ cart }) => {
    return(
        <>
            {
                cart.map(el => {
                    return (<p key={el.uuid} className="Bill">-- {el.title}</p>)
                })
            }
        </>
    )
}

export default BillList