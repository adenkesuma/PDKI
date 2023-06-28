import { useEffect, useRef } from 'react'
import JsBarcode from 'jsbarcode'

const BarcodeGenerator: React.FC = ({ code }) => {
  const barcodeRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, code, {
        format: 'CODE128', 
        displayValue: true, 
      })
    }
  }, [code])

  return <canvas className='w-[100px]' ref={barcodeRef}></canvas>
}

export default BarcodeGenerator
