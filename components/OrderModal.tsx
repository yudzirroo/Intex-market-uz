"use client"
import React, { Dispatch, SetStateAction } from 'react'
import Modal from './Modal'
import PoolCard from './PoolCard'
import { CardIcon } from '@/assets/icons/icon'
import { useTranslations } from 'next-intl'

const OrderModal = ({isOpen, setIsOpen}:{isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>>}) => {
    const t = useTranslations("Order")

  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
        <div className="flex flex-col lg:flex-row pt-6 lg:pt-0 items-center gap-[47px]">
            <PoolCard frame='sdf' price={123}/> 
            <div className="flex flex-col gap-[18px] w-[100%] lg:w-[50%]">
              <input type={"text"} className="text-center !py-[14px] w-full !rounded-[17px] font-bold !text-[20px]" style={{ boxShadow: '0 0 10px #CBCBCB' }} placeholder={t("name")}/>
              <input type={"tel"} className="text-center !py-[14px] w-full !rounded-[17px] font-bold !text-[20px]" style={{ boxShadow: '0 0 10px #CBCBCB' }} placeholder={t("phone")}/>
              
              <div className="flex gap-[18px]">
                <input type={"text"} className="text-center !py-[14px] w-full !rounded-[17px] font-bold !text-[20px]" style={{ boxShadow: '0 0 10px #CBCBCB' }} placeholder={t("adres")}/>
                <button className="text-center !py-[14px] !px-[14px] !rounded-[17px] font-bold !text-[20px]" style={{ boxShadow: '0 0 10px #CBCBCB' }}><CardIcon /></button>
              </div>

              <div className="mx-auto">
                <button style={{ boxShadow: '0 0 10px #CBCBCB' }} className='bg-[#FFE600] text-[25px] py-[7px] w-[237px] rounded-[10px] cursor-pointer'>{t("order")}</button>
              </div>
            </div>
        </div>
    </Modal>
  )
}

export default OrderModal