import { CircleUserRound } from 'lucide-react';

function MessagePreview({preview, message}) {
    return (
        <div className="flex-1 flex flex-col">
            <div className=" h-[80vh] w-md shadow-2xl border-[2px] border-whatsappBorder flex flex-col rounded-2xl text-text_color font-medium items-end
                bg-[url(https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg)] ">
                
                <div className=" flex flex-row items-center gap-2 bg-whatsappGray w-full h-14 border-b-[1px] p-2.5 border-whatsappBorder rounded-t-xl">
                    <CircleUserRound className='w-9 h-9 text-gray-300'/>
                    <span className='text-2xl font-semibold'>Reciever</span>
                </div>
                    {preview ? (
                        <div className="bg-whatsappGreen flex flex-col max-w-xs m-3 min-w-xs border-8 border-whatsappGreen rounded-lg">
                            <img src={preview} alt="imagetosend" className="rounded-lg mb-2"/>
                            <span>{message}</span>    
                        </div>       
                    ) : (
                        <div className="bg-whatsappGreen flex flex-col max-w-xs m-3 border-8 border-whatsappGreen rounded-lg">
                            <span>{message}</span>    
                        </div> 
                    )}       
                    
            </div>
        </div>
    )
}

export default MessagePreview;