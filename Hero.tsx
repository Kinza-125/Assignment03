import React from 'react'
import Image from 'next/image';

export default function Home (){
  return (

      <section className="bg-white p-8 mt-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Welcome to Our World</h2>
          <p className="mb-4">Discover amazing content tailored just for you!</p>
      

        <Image
          src="/image.png"
          alt="image"
          width={600}
          height={600}
          className="w-1/2 h-auto rounded-lg shadow-md" 
/>



        
        
      </div>
      </section>
        

  
  );
}
