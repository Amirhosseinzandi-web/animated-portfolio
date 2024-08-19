import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';




export async function getImage(src: string) {
  let buffer: Buffer;

  try {
    buffer = await fetch(src).then(async res =>
      Buffer.from(await res.arrayBuffer())
    )
  } catch (error: any) {
    console.error(`Error fetching image: ${error.message}`)
    return null; // or throw a custom error
  }

  if (buffer) {
    const { metadata: { height, width }, ...plaiceholder } = await getPlaiceholder(buffer, { size: 10 })

    return {
      ...plaiceholder,
      img: { src, height, width }
    }
  } else {
    console.error('Error: buffer is undefined')
    return null; // or throw a custom error
  }
}

// *******************************************************************


type DynamicImageType = {
  url: string
  alt?: string
  className?: string
  width?: number
  height?: number
}


export default async function DynamicImage({ url, alt, className, width, height }: DynamicImageType) {
  const image = await getImage(url)

  if (!image) {
    // Handle the case where getImage returns null
    return <div>Error loading image</div>
  }

  const { base64, img } = image

 return (
   <Image
     {...(width && height ? { width, height } : { fill: true })}
     className={className}
     src={img.src}
     alt={alt || ''}
     placeholder='blur'
     blurDataURL={base64}
   />
 )
}
