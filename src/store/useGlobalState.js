import {useState} from 'react'

const useGlobalState = () =>{
    const [productname, setProductName] = useState({value:""})
    const [category, setCategory] = useState({value:"Electronics"})
    const [productdetails, setProductDetails] = useState({value:""})
    const [price, setPrice] = useState({value:500})
    let [id, setId] = useState({value:1})

    let [products, setProducts] = useState({value:[{
        id:1,
        productname:"cheruppu",
        category:"Electronics",
        productdetails:"Very old",
        price:"5000"

    }]})
    
    const actions = (action) =>{
        let {type,payload} = 
        action;
        switch (type){
            case 'setProducts':
                products.value=products.value.concat(payload.value)
                return products
            case 'setId':
                id.value=id.value+1
                return id
            case 'setPrice':
                return setPrice(payload)
            case 'setProductName':
                return setProductName(payload)
            case 'setCategory':
                return setCategory(payload)
            case 'setProductDetails':
                return setProductDetails(payload)
            default:
                return null
        }
    }
    return {productname,products,price,id,category,productdetails,actions}
}

export default useGlobalState