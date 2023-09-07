import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-15">
  <h1 className="text-4xl font-bold mb-4">Images in Next.js</h1>
  <div className="flex flex-row mb-4">
    <div className="mr-4">
      <Image
        src='/images/image-1.jpg'
        alt="Next.js Logo"
        className="w-80 h-80"
        width={800}
        height={800}
      />
    </div>
    <div>
      <Image
        src="https://avatars.githubusercontent.com/u/40210878?v=4"
        alt="Next.js Logo"
        className="w-80 h-80"
        width={800}
        height={800}
      />
    </div>
  </div>

  {/* Added div for mask image */}
  
  <div className="image-mask-container relative">
    
    <Image 
      className="base-image" 
      src="/images/image1.png" 
      alt="Base Image" 
      width={800}
      height={800}
    />
    <Image 
      className="mask-image" 
      src="/images/mask.png" 
      width={800}
      height={800}
      alt="Mask Image" 
    />
  </div>

  
</main>



  )
}
