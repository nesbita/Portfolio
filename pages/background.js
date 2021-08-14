import Image from 'next/image'

export default function Background () {
    return(
        <div>
           <Image
        alt='trees'
        src='/trees.jpg'
        layout="fill"
        objectFit="cover"
        quality={100} 
        />
        </div>
    )
} 