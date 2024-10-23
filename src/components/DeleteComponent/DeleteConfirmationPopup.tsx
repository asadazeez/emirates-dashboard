import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
type Props={
 deleteId:(id:string)=>void
 id:string;
isOpen:boolean
setIsOpen:(value:any)=>void
}


const DeleteConfirmation = ({ id,deleteId,isOpen,setIsOpen}:Props)=> {
  
  return (
    <>
      
      <Dialog open={isOpen} onClose={() => setIsOpen(null)} className="relative z-99999 ">
        <div className="fixed  bg-black bg-opacity-30 backdrop-blur-sm inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border rounded-xl text-black dark:text-white bg-white dark:bg-dark-3 p-12">
            <DialogTitle className="font-bold text-center text-2xl mb-6 ">Confirm Deletion</DialogTitle>
            <p>Are you sure you want to Delete?</p>
       
            <div className="flex justify-evenly gap-4">
              <button onClick={() => setIsOpen(null)} className='bg-blue-400 rounded-lg px-3 py-1'>Cancel</button>
              <button onClick={()=>{
                deleteId(id)
                setIsOpen(null)
              }}className= 'bg-blue-400 rounded-lg px-3 py-1'>Delete</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default DeleteConfirmation;