import React, { useState } from 'react';
import { X } from 'lucide-react';

const languages = [
  { name: 'English', region: 'United States' },
  { name: 'Azərbaycanca', region: 'Azərbaycan' },
  { name: 'Bahasa Indonesia', region: 'Indonesia' },
  { name: 'Bosanski', region: 'Bosna i Hercegovina' },
  { name: 'Català', region: 'Espanya' },
  { name: 'Čeština', region: 'Česká republika' },
  { name: 'Crnogorski', region: 'Crna Gora' },
  { name: 'Dansk', region: 'Danmark' },
  { name: 'Deutsch', region: 'Deutschland' },
  { name: 'Deutsch', region: 'Österreich' },
  { name: 'Deutsch', region: 'Schweiz' },
  { name: 'Deutsch', region: 'Luxemburg' },
  { name: 'Eesti', region: 'Eesti' },
];

const Internet = ({ onClose }) => {
  const [translate, setTranslate] = useState(true);
  const [selected, setSelected] = useState('English');

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className='bg-white w-[75%]   rounded-3xl'>
      <div className=" max-w-full px-6 pb-6 relative  rounded-3xl overflow-y-auto max-h-[80vh]">
        <div className="sticky top-0 py-6 bg-white ">

        <button
          onClick={onClose}
          className="absolute top-4 left-0 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>


        </div>
        <h2 className="text-sm font-semibold mt-10 ">Language and region</h2>

        <div className="my-10 w-[500px] flex items-center justify-between p-4 bg-[#F7F7F7] rounded-lg">
            <div className='flex flex-col'>
                <span className="font-medium">Translation</span>
           <p className="text-gray-500 ">
          Automatically translate descriptions and reviews to English.
        </p>

            </div>
          
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={translate}
              onChange={() => setTranslate(!translate)}
              className="hidden"
            />
            <span
              className={`w-10 h-7 flex items-center  rounded-full  duration-300 ${
                translate ? 'bg-black' : 'bg-gray-300'
              }`}
            >
              <span
                className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${
                  translate ? 'translate-x-4' : ''
                }`}
              ></span>
            </span>
          </label>
       
        </div>


        <h3 className="font-semibold mb-2">Choose a language and region</h3>
        <div className="grid grid-cols-4 gap-4">
          {languages.map((lang, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(lang.name)}
              className={`text-left p-3  hover:bg-[#F7F7F7] rounded-lg  ${
                selected === lang.name ? 'border-black border ' : 'border-gray-300'
              }`}
            >
              <div className="font-medium">{lang.name}</div>
              <div className="text-gray-500 text-sm">{lang.region}</div>
            </button>
          ))}
        </div>
      </div>


        </div>

    </div>
  );
};

export default Internet;
