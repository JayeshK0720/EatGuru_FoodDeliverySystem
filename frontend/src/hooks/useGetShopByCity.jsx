import React, { useEffect } from 'react'
import axios from 'axios'
import { serverUrl } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import { setShopInMyCity } from '../redux/userSlice'

const useGetShopByCity = () => {
    const dispatch = useDispatch()
    const {currentCity} = useSelector(state => state.user)
    useEffect(() => {
        const fetchShops = async () => {
            try {
                const result = await axios.get(`${serverUrl}/api/shop/get-by-city/${currentCity}`,
                    { withCredentials: true })
                // console.log(result.data);
                    dispatch(setShopInMyCity(result.data))

            } catch (error) {
                console.log(error)
            }
        }
        fetchShops()
    }, [currentCity])
}

export default useGetShopByCity