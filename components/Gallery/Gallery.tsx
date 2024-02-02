import React from 'react'

const Gallery = () => {
  return (
    <div className="overflow-hidden mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div className='hover:scale-110 duration-300'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.oneclickdrive.com/uploads/Land-Rover_Defender-X-V6_2022_20209_20209_14063449680-6_thumbnail.jpg?clr=20.1"
              alt=""
            />
          </div>
          <div className='hover:scale-110 duration-300'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.oneclickdrive.com/uploads/Cadillac_Escalade_2021_14794_14794_14032776561-10_thumbnail.jpg?clr=20.1"
              alt=""
            />
          </div>
          <div className='hover:scale-110 duration-300'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.oneclickdrive.com/uploads/Mercedes-Benz_AMG-G63-Double-Night-Package_2023_21547_21547_14052819732-1_thumbnail.jpg?clr=20.1"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className='hover:scale-110 duration-300'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.oneclickdrive.com/uploads/Mercedes-Benz_GLB-250_2020_19052_19052_1402751479-1_thumbnail.jpg?clr=20.1"
              alt=""
            />
          </div>
          <div className='hover:scale-110 duration-300'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.oneclickdrive.com/uploads/Mercedes-Benz_C300_2020_21539_21539_14057395183-5_thumbnail.jpg?clr=20.1"
              alt=""
            />
          </div>
          <div className='hover:scale-110 duration-300'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.oneclickdrive.com/uploads/Kia_Picanto_2023_21562_21562_14038313608-1_thumbnail.jpg?clr=20.1"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className='hover:scale-110 duration-300'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.jagranimages.com/images/newimg/27072020/27_07_2020-shri-kashi-vishwanath-temple_20557350.jpg"
              alt=""
            />
          </div>
          <div className='hover:scale-110 duration-300'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.jansatta.com/wp-content/uploads/2021/12/Kashi-Vishwanath-Mandir.png?w=1024"
              alt=""
            />
          </div>
          <div className='hover:scale-110 duration-300'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://staticimg.amarujala.com/assets/images/2021/11/07/750x506/kashi-vishwanath-dham_1636258507.jpeg?w=674&dpr=1.0"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className='hover:scale-110 duration-300'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://staticimg.amarujala.com/assets/images/2020/01/13/750x506/kashi-vishwanath-mandir-varanasi_1578924152.png?w=700&dpr=2.0"
              alt=""
            />
          </div>
          <div className='hover:scale-110 duration-300'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/800px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg"
              alt=""
            />
          </div>
          <div className='hover:scale-110 duration-300'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/2/25/Chet_Singh_Ghat_in_Varanasi.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery