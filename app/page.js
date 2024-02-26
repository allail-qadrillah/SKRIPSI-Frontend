

import Dropzone from "@/components/DropZone"
import ChartProbabilities from "@/components/ChartProbabilities"
import Image from "@/components/Image"

export default function Home() {
  return (
    <div className="bg-gray-100 p-8">


      <h1 className="font-bold text-center mb-12">
        <span className="text-6xl font-bold bg-clip-text">Skrining</span>
        <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00f5a0] to-[#00d9f5]"> Tuberkulosis</span>
      </h1>

      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 justify-center items-center">
        <div className="bg-[#0D1F2D] rounded-xl flex flex-row items-center justify-center pt-[7px] pb-2 pr-[27px] pl-[23px] box-border min-w-[408px] max-w-full mq750:min-w-full mq1150:flex-1">

          <Dropzone />

        </div>
        <div className="bg-[#0D1F2D] rounded-xl flex flex-row items-center justify-center pt-[7px] pb-2 pr-[27px] pl-[23px] box-border min-w-[408px] max-w-full mq750:min-w-full mq1150:flex-1">

          <Dropzone />

        </div>

      </div>

      <ChartProbabilities />
    </div>
  )
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}
