import PoolCard from '@/components/PoolCard'
import Title from '@/components/Title'
import { useTranslations } from 'next-intl'

const FramePool = () => {
    const t = useTranslations("Frame")
  return (
    <div className='text-white' id='frame'>
        <Title title={t("title")}/>
        <div className="containers !py-[100px] px-[30px] lg:!px-0 flex gap-y-[40px] gap-x-[10px] justify-center md:justify-between flex-wrap">
            <PoolCard status='discount' frame='Металлический каркас'  discount={1000} price={200000}/>
            <PoolCard status='recommended' frame='Металлический каркас'  discount={1000} price={200000}/>
            <PoolCard status='none' frame='Металлический каркас'  discount={1000} price={200000}/>
            <PoolCard frame='Металлический каркас'  discount={1000} price={200000}/>
        </div>
    </div>
  )
}

export default FramePool