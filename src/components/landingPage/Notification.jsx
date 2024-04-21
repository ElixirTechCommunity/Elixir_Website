import { notification1 } from "@/assets";
import { notificationImages } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <Image
        src={notification1}
        width={62}
        height={62}
        alt='image'
        className='rounded-xl'
      />

      <div className='flex-1'>
        <h6 className='mb-1 font-semibold text-base'>{title}</h6>

        <div className='flex items-center justify-between'>
          <Link href={"https://discord.com/invite/YN9ZGjXdXK"} target='_blank'>
            <div className='body-2 text-n-13'>Join discord</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notification;
