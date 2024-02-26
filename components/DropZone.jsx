"use client"

import { useState } from "react";
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from "../components/Image";


function Dropzone() {
  const [file, setFile] = useState({});
  const [isHaveFile, setHaveFile] = useState(false);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      const newFile = Object.assign(acceptedFiles[0], { preview: URL.createObjectURL(acceptedFiles[0]) });
      setFile(newFile);
      setHaveFile(true);
    }

    if (rejectedFiles?.length) {
      setRejected(previousFiles => [...previousFiles, ...rejectedFiles])
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  console.log(file)

  return (
    <div
      {...getRootProps({
        style: {
          width: 550,
          height: 550,
        },
      })}
    >
      <input {...getInputProps()} />
      {
        isHaveFile ?
          <Image
            src={file.preview}
            alt=""
            width={800}
            height={400}
            rounded="rounded"
            className="lg:hover:scale-105 h-[545px] flex-1 relative max-w-full overflow-hidden object-cover "
          /> :
          <div class="flex items-center justify-center w-full">
            <label for="dropzone-file" class="mt-40 flex flex-col items-center justify-center w-full h-64 ">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                {
                  isDragActive ?
                    <p class="mb-2 text-sm text-gray-100 dark:text-gray-400">Drop citra disini ...</p> :
                    <>
                      <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                      </svg>
                      <p class="mb-2 text-sm text-gray-100 dark:text-gray-400">
                        <span class="font-semibold">Klik untuk mengupload</span> atau drag and drop</p>
                    </>
                }
              </div>
            </label>
          </div>
      }

    </div >
  )
}

export default Dropzone