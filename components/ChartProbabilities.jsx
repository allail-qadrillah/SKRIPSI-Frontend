import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function ChartProbabilities() {
  return (
    <div className="max-w-xs mx-auto mt-8">
      <Card className="bg-[#0D1F2D] rounded-3xl p-6 text-white w-full max-w-md">
        <CardHeader>
          <CardTitle>Keyakinan Prediksi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Normal</span>
                <span className="font-semibold">99%</span>
              </div>
              <div className="w-full bg-[#1A374D] rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] h-2.5 rounded-full"
                  style={{
                    width: "99%",
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Tuberkulosis</span>
                <span className="font-semibold">1%</span>
              </div>
              <div className="w-full bg-[#1A374D] rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] h-2.5 rounded-full"
                  style={{
                    width: "1%",
                  }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-base">Is it true?</span>
              <div className="flex justify-center gap-2">
                <Button className="bg-[#26d699] hover:bg-[#2e9e77] font-semibold">Benar</Button>
                <Button className="bg-[#ff0000eb] hover:bg-red-800 font-semibold">Salah</Button>
              </div>
            </div>

          </div>

        </CardContent>
      </Card>
    </div>
  )
}

export default ChartProbabilities