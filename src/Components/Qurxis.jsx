import React, { useState, useEffect } from 'react';

export default function Qurxis() {
  const [typedText, setTypedText] = useState('');
  const textOptions = ['Trusted', 'Reliable', 'AND Ugu Shidan'];
  const typingSpeed = 100;
  const backspacingSpeed = 120;

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    let isDeleting = false;
    let timer;

    const typeText = () => {
      const currentOption = textOptions[currentIndex];
      const currentLength = currentText.length;

      if (isDeleting) {
        currentText = currentOption.substring(0, currentLength - 1);
      } else {
        currentText = currentOption.substring(0, currentLength + 1);
      }

      setTypedText(currentText);

      if (!isDeleting && currentText === currentOption) {
        isDeleting = true;
        timer = setTimeout(typeText, backspacingSpeed);
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % textOptions.length;
        timer = setTimeout(typeText, typingSpeed);
      } else {
        timer = setTimeout(typeText, isDeleting ? backspacingSpeed : typingSpeed);
      }
    };

    timer = setTimeout(typeText, typingSpeed);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          BetaHouse The Best Rental Company
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Get The Best Houses
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Most
          </p>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'>
            {typedText}
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Kireyso guri laga soo shaqeeyay</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Houses & Home</button>
      </div>
    </div>
  );
}
